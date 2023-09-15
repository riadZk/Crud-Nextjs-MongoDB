const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    lastname: String,
    email: String,
    age: Number
})

export default mongoose.models.User || mongoose.model('User',userSchema )