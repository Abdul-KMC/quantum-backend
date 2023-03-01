const mongoose = require("mongoose");

module.exports = function() {
    //connecting to the database
    mongoose.connect("mongodb+srv://Abdul057:Tlas%40717%23shA@cluster.lcjwlzr.mongodb.net/test").then(() => {}).then(() => console.log('Connected to the MongoDB....'))
        .catch(err => console.log(err.message));
};
//mongodb+srv://Abdul057:Tlas%40717%23shA@cluster.lcjwlzr.mongodb.net/test
//mongodb://localhost:27017