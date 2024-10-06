const { Schema, model } = require("mongoose");

const subWebsiteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const SubWebsite = model("SubWebsite", subWebsiteSchema);

module.exports = SubWebsite;
