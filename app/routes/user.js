const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('hello');
})

router.post('/',(req, res)=>{

})

module.exports = router