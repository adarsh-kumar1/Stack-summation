const express = require("express");
const app = express();
const sequileze = require("./database");
const models = require("./models/init-models");
const cors = require("cors");
const sequelize = require("./database");

app.use(cors());
app.use(express.json());

app.get("/user/getlist", async (req, res) => {
  const data = await models(sequileze).user.findAll();
  res.status(200).json(data);
});
app.post("/userLogin", async (req, res) => {
  try {
    const result = await models(sequelize).user.findOne({
      where: { username: req.body.username, password: req.body.password },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.post("/adduser", async (req, res) => {
  console.log(req.body);

  try {
    const result = await models(sequileze).user.create({
      username: req.body.username,
      email: req.body.email,
      fullname: req.body.fullname,
      profileimage: req.body.profileimage,
      password: req.body.password,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

sequileze.authenticate().then(() => {
  app.listen(5000, (err) => {
    if (err) throw err;
    console.log("Server is running on port 5000");
  });
});
