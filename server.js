require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// express app
app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/", workoutRoutes);

// connect
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listner
    app.listen(process.env.PORT, () => {
      console.log("listen", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e.meessage);
  });

  module.exports=app