const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParer = require("cookie-parser");
const corsOptions = require("./cofig/corsOptions");
const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", false);
dotenv.config();

const app = express();
const PORT = 8080 || process.env.PORT;
const mongodb_conn_str = process.env.MONGODB_CONN_STR;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParer());

app.get("/", (req, res) => {
  return res.send("welcome to the server!");
});

app.use("/api/messages/", require("./controllers/Msg"));
app.use("/api/users/sign/", require("./controllers/User"));

mongoose.connect(mongodb_conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongodb database");
  app.listen(PORT, () => console.log(`the server is running at port ${PORT}`));
});

mongoose.connection.on("error", (err) =>
  console.log("error while connecting to mongodb", err)
);
