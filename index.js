const express = require("express");
const { connection } = require("./config/db");
const { pointRouter } = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", pointRouter);

app.use("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connection established with database");
  } catch (err) {
    console.log(`error connection database to server ${err}`);
  }

  console.log("Listening to PORT 8080");
});
