const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.jwt_SECRET || "HFMoonShop";
const EXPIRE_IN = process.env.jwt_EXPIRE || "30d";

exports.sign = (payload) =>
  jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRE_IN });

exports.verify = (token) => jwt.verify(token, SECRET_KEY);
