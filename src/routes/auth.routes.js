const { Router } = require("express");
const path = require("path");
const db = require("../config");
const router = Router();

// register page render
router.get("/register", (req, res, next) => {
  try {
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../", "../", "/public/register.html"));
  } catch (error) {
    next(error);
  }
});

// register route
router.post("/register", (req, res, next) => {
  const { username, password } = req.body;
  try {
    const sql = `INSERT INTO user (username,password) VALUES ('${username}','${password}')`;
    db.query(sql, (error, data) => {
      if (error) throw error;
      return res.status(201).send(data);
    });
  } catch (error) {
    next(error);
  }
});

// login route
router.post("/login", (req, res, next) => {
  try {
    const { username, password } = req.body;

    const sql = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`;
    db.query(sql, (error, data) => {
      if (error) return res.status(400).send(error);

      if (data.length > 0) {
        return res.status(200).send({ data: data[0], sql });
      } else {
        return res
          .status(400)
          .send({ message: "Invalid username or password", sql });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
