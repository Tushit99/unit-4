
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://fw01:tushit@cluster0.9kbcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.export = connect;

