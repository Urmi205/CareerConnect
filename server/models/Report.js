const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    position: { type: String, required: true },
    company: { type: String, required: true },
    image: { type: String}
});
module.exports = mongoose.model('Report',reportSchema);