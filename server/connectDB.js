const mongoose = require("mongoose")

const connectToDataBase = (user_url) =>{
    return mongoose.connect(user_url);
}

module.exports = connectToDataBase;