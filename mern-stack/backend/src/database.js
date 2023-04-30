const mongoose = require('mongoose');
const uri = 'mongodb://mongo:X1D6YN0l5MUVvGMAJj9y@containers-us-west-177.railway.app:5956';
mongoose.connect(uri).then(db => console.log('db is conected')).catch(err => console.log(err));

module.exports = mongoose;