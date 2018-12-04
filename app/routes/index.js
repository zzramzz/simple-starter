const user = require('./user')
const item = require('./item')
module.exports =(app)=>{
    app.use('/api/users', user);
    app.use('/api/item',item);
}