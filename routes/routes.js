const express = require("express");
const { userModel } = require("../models/models");

const pointRouter = express.Router();

pointRouter.post("/addPoints", async (req, res) => {
  console.log("Post");
  const { name, points } = req.body;
  try {
    const user = new userModel({ name, points });
    await user.save();
    res.send("Your data has been successfully uploaded");
  } catch (err) {
    res.send(`Error Posting your data ${err}`);
  }
});

pointRouter.get("/getPoints", async (req, res) => {
  try {
    const users = await userModel.find().sort({ points: -1 });
    res.send(users);
  } catch (err) {
    res.send("unable to get your data");
  }
});

module.exports = { pointRouter };
