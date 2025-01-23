const express = require("express");
const cors = require("cors");
const Users = require("./config");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await Users.add({ name, email, password });
  res.json(newUser);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
