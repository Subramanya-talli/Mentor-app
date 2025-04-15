const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
const routes = require("./routes/user/routes");
const conneectionDB = require("./connectDB")
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello from the");
});

app.use("/user", routes);


conneectionDB("")
.then(()=>{
    console.log("Data Base is connected");
})

app.listen(PORT, () => {
  console.log(`App is Running in the ${PORT}`);
});
