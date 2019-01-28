const express = require("express");
const http = require("http");
const reload = require("reload");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb //
const db = require("./config/keys").mongoURI;

// connect to mongodb //
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(e => console.log(e));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport.js")(passport);

// use routes //
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.port || 5000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
reload(app);
