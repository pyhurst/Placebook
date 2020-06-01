const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/placebook';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Connected to Mongo');
    },
    err => {
        console.log('Error connecting to Mongo: ');
        console.log(err);
    }
)

module.exports = mongoose.connection;