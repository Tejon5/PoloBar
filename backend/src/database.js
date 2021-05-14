const mongoose = require("mongoose");
//require("dotenv").config();

const URI = "mongodb://localhost/tejon-polobar";

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log("La base de datos esta conectada"))
.catch(err=>console.log(err))