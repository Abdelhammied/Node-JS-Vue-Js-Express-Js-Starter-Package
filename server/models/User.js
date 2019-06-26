const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: 255,
    }
})