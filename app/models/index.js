const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URI;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
