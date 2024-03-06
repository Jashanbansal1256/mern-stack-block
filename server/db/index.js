const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://jashan:jashan@cluster0.clrggm6.mongodb.net/")
  .then(() => console.log("connect mongoose db"))
  .catch((e) => console.log(e));
