require("dotenv").config();
const express = require("express");
const projectRoutes = require("./routes/projectRoute");

//express app
const app = express();

//port
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

//listen for request
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
