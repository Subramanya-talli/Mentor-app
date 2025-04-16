const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
const routes = require("./routes/user/routes");
const conneectionDB = require("./connectDB")
const PORT = process.env.PORT || 5000;
const monggoDb_url = process.env.mongodb_Url

app.use(express.json());

app.use("/api", routes);

app.use("/", (req, res) => {
  res.send("Hello from the backend");
});

// app.use("*", (req, res)=>{
//   res.status(404).json({ message: "Route not found" });
// })

conneectionDB(monggoDb_url)
.then(()=>{
    console.log("Data Base is connected");
})

app.listen(PORT, () => {
  console.log(`App is Running in the ${PORT}`);
});
