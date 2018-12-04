const router = require('express').Router();
const Order = require('../models/order_model');
const User = require('../models/user_model');
const Item = require('../models/item_model');
const validateOrder = require('../validators/orderValidator');
const objectIdValidator = require('../validators/objectIdValidator');

const Fawn = require('fawn');

router.get('/', async (req, res) => {
    const order = await Order.find();
    res.send(order);
})

router.post('/', validateOrder, async (req, res) => {
    const user = await User.findOne({ _id: req.body.userId })
    if (!user) return res.status(400).send('Invalid User');

    const item = await Item.findOne({ _id: req.body.itemId })
    if (!item) return res.status(400).send('Invalid Item')
    if(item.inStock === 0 )return res.status(400).send('Item out of Stock')

    const order = new Order({
        user: {
            name: user.name,
            phone: user.phone
        },
        item: {
            title: item.title,
            price: item.price

        },
        qty : req.body.qty

    })
    
  try{
    new Fawn.Task()
    .save('order', order)
    .update('item', { _id:item._id}, {
        $inc : {inStock : -1}
    })
    .run();
  res.send(order);
  }
  catch(ex) {
    res.status(500).send('Something failed')
  }
})

//cancel order
router.delete('/:id',objectIdValidator,(req,res)=>{
    const result = await Order.findOneAndDelete({_id:req.params.id})
    if(!result) return res.send(' Order Already Deleted')
    res.send(result);
})
module.exports = router;
