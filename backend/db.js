import mongoose from "mongoose";

const mongoURI = "mongodb+srv://julkernkarim:nayeen,019@cluster0.xeaqe.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Fetch data from the "sessions" collection
    const collection = mongoose.connection.db.collection("movies");
    const fetched_data = await collection.find({}).toArray();

    if (fetched_data.length === 0) {
      console.log("No data found in the 'sessions' collection.");
    } else {
      console.log("Fetched data:", fetched_data);
    }
  } catch (err) {
    console.error("Connection or data fetch error:", err);
  }
};

export default mongoDB;