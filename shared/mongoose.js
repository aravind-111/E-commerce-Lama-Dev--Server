const mongoose = require("mongoose");

module.exports = {
  async connect() {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("DB Connected Successfully"))
      .catch((err) => console.log(err));
  },
};
