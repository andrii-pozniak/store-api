const mongoose = require("mongoose")
mongoose.set("strictQuery", false);

const connectMongo = async() => {
    try {
        await mongoose.connect(MONGODB_URL, {
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