const express = require("express");
const cors = require("cors");
const Users = require("./config");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await Users.add({ name, email, password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});