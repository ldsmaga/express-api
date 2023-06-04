const express = require("express");
const router = express.Router();
const Users = require("../model/user");

router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    return res.send(users);
  } catch (err) {
    return res.send({ error: err });
  }
});

router.post("/create", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.send({ error: "Insufficient data" });

  const query = Users.where({ email });
  const user = await query.findOne().then((data) => {
    if (data) return res.send({ error: "User already taken" });
    
    Users.create({ email, password }).then((data)=>{
        data.password = undefined;
        return res.send(data)
    });
  });
});

router.put("/", (req, res) => {
  res.send("User PUT request");
});

router.delete("/", function (req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
