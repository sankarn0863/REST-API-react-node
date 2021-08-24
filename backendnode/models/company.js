const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    id: {type: String, required: true},
    price: {type: String, required:true},
    rewards: {type: String, required: true}
});

module.exports = mongoose.model("company", CompanySchema);




