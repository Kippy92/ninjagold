const mongoose = require('mongoose');

var NinjaSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"]},
    score: {type: Number, default: 0},
    completed: {type: Boolean, default: false },
  }, {timestamps: true});

mongoose.model('Ninja', NinjaSchema);