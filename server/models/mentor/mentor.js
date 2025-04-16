const { Schema, default: mongoose } = require("mongoose");

function isValidEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

const mentorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validate: isValidEmail,
        message: "Please enter a valid email address",
      },
    },

    password: {
      type: String,
      trim: true,
      minlength: 6,
    },

    expertise: {
      type: [String],
      required: true,
    },

    bio: {
      type: String,
      default: "",
    },

    experience: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    available: {
      type: Boolean,
      default: 0,
    },

    profileImg: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mentor", mentorSchema)
