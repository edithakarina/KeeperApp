const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

const db={
  mongoose : mongoose,
  url : dbConfig.url,
  note: require("./note.model.js")
}

module.exports= db;