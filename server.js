const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const dbConnection = require("./connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(morgan("dev"));
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongoose DB Connection
mongoose.Promise = global.Promise;

// Sessions
app.use(
  session({
    secret: "facebook-special",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Mongoose
// const mongoose = require("mongoose");

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
