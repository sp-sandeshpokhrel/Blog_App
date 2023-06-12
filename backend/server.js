const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");
//database initialization and on successful connection, start the server
const port = process.env.PORT || 5000;

let server;
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Blog_DB",
    //useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(async () => {
    console.log("Successfully connected to MongoDB Atlas!");
    //check if app already open on the port then dont run listen function
    try {
      server = app.listen(port, (error) => {
        console.log(`Server running on port ${port}`);
      });
    } catch (err) {
      console.log(err);
    }
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

module.exports = { app, server };
