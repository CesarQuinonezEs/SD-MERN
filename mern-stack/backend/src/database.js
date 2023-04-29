const mongoose = require('mongoose');
const uri = 'mongodb+srv://quinonezcesar:vrZtCSbhMbTGV6gH@cluster0.uoiyt8n.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri).then(db => console.log('db is conected')).catch(err => console.log(err));

module.exports = mongoose;


//quinonezcesar
//vrZtCSbhMbTGV6gH