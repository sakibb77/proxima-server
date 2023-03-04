require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoute");
const userRoute = require("./routes/userRoute");

//express app
const app = express();

//port
const PORT = process.env.PORT || 7000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoute);

//mongoDB
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(PORT, () => {
      console.log(`connected to mongo and listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
