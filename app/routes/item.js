const router = require('express').Router();
const Item = require('../models/item_model');
const itemValidator = require('../validators/itemValidator');
const objectIdValidator = require('../validators/objectIdValidator');

router.post('/',itemValidator,async (req,res)=>{
    const {title, price,inStock,photo,desc,type} = req.body;
    const item = new Item({
        title, price,inStock,photo,desc,type
    })
    await item.save();
    res.send(item);
})

router.get('/',async(req,res)=>{
    const items= await Item.find();
    res.send(items);
})

router.get('/:id',objectIdValidator, async(req, res)=>{
    const item = await Item.findOne({_id:req.params.id});
    if(!item) return res.send('item not found');
    res.send(item);
})

router.put('/:id',objectIdValidator,async(req,res)=>{
    const item = await Item.findOneAndUpdate({_id:req.params.id},req.body);
    res.send(item);
})
router.delete('/:id',objectIdValidator,async(req,res)=>{
    const result = await Item.findOneAndDelete({_id:req.params.id});
    if(!result) return res.send(' not found to delete')
    res.send(result);
})

module.exports = router;