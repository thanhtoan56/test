const mongoose = require('mongoose');

const indexsSchema = new mongoose.Schema({
    nameCollection: {
        type: String,
        required: true,
        trim: true,
        validate(value){ if(value.length ==  0){ throw new Error('Name collection is null!'); } },
    },
    index:{
        type: Number,
        required: true,
        validate(value){
            if(value.length ==  0){ throw new Error('Index number is null!'); }
            
            if(value <= 0){ throw new Error('Index number indexs wrong!'); }
        }
    },

    created_at:{ type: Number, default: new Date().getTime() },
    
    updated_at:{ type: Number, default: new Date().getTime() }
});

const indexS = mongoose.model('indexs', indexsSchema)

module.exports = indexS