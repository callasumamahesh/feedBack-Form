// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
