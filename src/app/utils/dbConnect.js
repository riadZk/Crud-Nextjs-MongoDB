
const mongoose = require('mongoose');

async function dbConnect(){
        await mongoose.connect('mongodb+srv://riad:riad1234@cluster0.8pfflrb.mongodb.net/user' ,{
          useUnifiedTopology:true , useNewUrlParser:true}
          );
       
    
}

export default dbConnect


