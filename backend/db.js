
const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/food_items";

const mongoDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("Food").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("category").find({}).toArray();

        global.fooditems = fetched_data;
        global.foodCategory=foodCategory;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;

