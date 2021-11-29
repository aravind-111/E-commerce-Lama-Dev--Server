const express = require("express");
const app = express();
const mongoose = require("./shared/mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3001;
mongoose.connect();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("working in port", PORT);
});
