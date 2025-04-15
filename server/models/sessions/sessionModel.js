const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    student: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : true
    },
    topic :
    {
        type: String,
        required :  ture,
        trim : true
    },
    sessionsDate : {
        type : Date,
        required : true,
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('session', sessionSchema);