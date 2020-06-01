import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Business from "./pages/Business/Business";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { StoreProvider } from "./utils/UserContext";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StoreProvider>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </StoreProvider>
        </div>
      </Router>
    );
  }
}

export default App;
