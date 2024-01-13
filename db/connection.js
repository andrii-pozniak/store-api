const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const{ MONGODB_URL} = process.env

const connectMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
    
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


module.exports = { connectMongo };