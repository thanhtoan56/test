const mongoose = require('mongoose');

// Connect to database etherum
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})