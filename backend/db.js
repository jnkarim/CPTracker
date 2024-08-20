import mongoose from "mongoose";

const mongoURI = "mongodb+srv://julkernkarim:nayeen,019@cluster0.xeaqe.mongodb.net/sample_user?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch data from the "users" collection within the "sample_user" database
    const collection = mongoose.connection.db.collection("users"); // Replace "users" with your collection name
    const fetched_data = await collection.find({}).toArray();

    if (fetched_data.length === 0) {
      console.log("No data found in the 'users' collection.");
    } else {
      global.sample_user = fetched_data; // Store fetched data globally
      console.log(global.sample_user);
    }
  } catch (err) {
    console.error("Connection or data fetch error:", err);
  }
};

export default mongoDB;