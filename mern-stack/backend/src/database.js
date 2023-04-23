const mongoose = require('mongoose');
const uri = 'mongodb://localhost/mernstack';
mongoose.connect(uri).then(db => console.log('db is conected')).catch(err => console.log(err));

module.exports = mongoose;