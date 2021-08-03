const mongoose = require("mongoose");

const userSchema = mongoose.Schema({});

/**
 * @typedef List
 */
const List = mongoose.model("List", userSchema);

module.exports = List;
