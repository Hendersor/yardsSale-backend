const jwt = require("jsonwebtoken");

const secret = "myKey";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwMDk0MjAyNH0.XhoWVNwf49oFHRNjlmhv9lsnTG4vPGfbm55MoDfsfys";

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
