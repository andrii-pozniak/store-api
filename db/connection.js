const mongoose = require("mongoose")
mongoose.set("strictQuery", false);

// const MONGODB_URL = 'mongodb+srv://Andrii:q9wl6E3knzIcGezG@cluster0.isopobq.mongodb.net/internet_store?retryWrites=true&w=majority';

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