const express = require("express");
const cors = require("cors");
const UserData = require("./UserData.js");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/api/sign-in", (req, res, next) => {
  const userData = UserData.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  if (!userData)
    return res.status(404).json({
      message: "User Not Found or wrong password!",
    });
  return res.status(200).json({
    userData,
  });
});

app.listen(5000, console.log("Server running on localhost 5000"));
