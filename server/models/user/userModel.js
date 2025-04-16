const mongoose = require("mongoose");
const { createHmac,  randomBytes} = require("crypto")

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

    salt: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically Add Created At and Updated At fields
  }
);


userSchema.pre("save" , function(next){
  if(!this.isModified("password")) return
  const salt = randomBytes(10).toString();
  const hashPassword = createHmac("sha256", salt)
  .update(this.password)
  .digest("hex");

  this.salt = salt;
  this.password = hashPassword;
  next();
})

module.exports = mongoose.model('user', userSchema)