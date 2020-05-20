import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import News from "./Components/News";
import Details from "./Components/Details";
import Default from "./Components/Default";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Example />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
