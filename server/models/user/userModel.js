const mongoose = require("mongoose");

function isValidEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // automatically remove whitespace from the beginning and end of the string
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: isValidEmail,
        message: "Please enter a valid email address",
      },
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    favoriteMentor: [{ type: mongoose.Schema.Types.ObjectId }],

    intrest: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true, // Automatically Add Created At and Updated At fields
  }
);

module.exports = mongoose.model('student', userSchema)