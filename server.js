import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://kwame:Gyabaa@4290@cluster0.c4tns.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
