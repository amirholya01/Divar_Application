const mongoose = require("mongoose");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST).then(() => {
    console.log(`Connecting to the Database was succeeded.`);
}).catch(err => {
    console.log(err?.message ?? `Connecting to the Database was failed.`);
});