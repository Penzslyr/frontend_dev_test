const express = require("express");
const router = express.Router();

// Middleware untuk validasi header
const validateHeader = (req, res, next) => {
  const userId = req.headers["user-id"];
  const scope = req.headers["scope"];

  if (userId !== "ifabula" || scope !== "user") {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }

  next();
};

router.get("/users", validateHeader, (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.json(users);
});

router.post("/users", validateHeader, (req, res) => {
  const newUser = req.body;

  console.log("Pengguna baru ditambahkan:", newUser);
  res
    .status(201)
    .json({ message: "Pengguna berhasil ditambahkan", user: newUser });
});

module.exports = router;
