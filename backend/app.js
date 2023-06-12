const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const profileRoute = require("./routes/myProfileRoute");
const blogRoute = require("./routes/blogRoute");

const app = express();
app.use(cors());
app.use(express.json());

//api endpoints
app.use("/api/users", userRoute);
app.use("/api/user", profileRoute);
app.use("/api/blogs", blogRoute);

module.exports = app;
