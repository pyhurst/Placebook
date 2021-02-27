const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const dbConnection = require("./connection");
const cookieSession = require('cookie-session');
const routes = require("./routes");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(morgan("dev"));
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongoose DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


// Sessions
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
})
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.use((req, res) => {
  switch (process.env.NODE_ENV) {
      case 'dev':
          res.sendFile(path.join(__dirname, './client/public/index.html'))
          break;
      case 'production':
          res.sendFile(path.join(__dirname, "./client/build/index.html"));
      default:
          break;
  }
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
