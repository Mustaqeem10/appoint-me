const express = require("express");
const app = express();
const pool = require("./db.config");
const router = require("./routes/user-router");
require("dotenv").config();
app.use(express.json());


app.use("/", router);

const PORT = process.env.DEV_PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
