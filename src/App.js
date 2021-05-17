import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*CSS*/
import "./Css/Navcss.css";
import "./Css/header.css";
import "./Css/Footer.css";
import "./Css/Events.css";
import "./Css/Contactus.css";
import "./Css/Home.css";
import "./Css/Login.css";
import "./Css/Ourstore.css";

/*PAGES*/
import Home from "./pages/Home";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Ourstore from "./pages/Ourstore";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

/*404*/
import Notfound from "./pages/404";

export default function App() {
  return (
    <Router>
      <Switch>
        {/*<Route path="/" component={Home} />*/}
        <Route component={Login} path="/login" exact />
        <Route path="/Home" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Events" component={Events} />
        <Route path="/Ourstore" component={Ourstore} />
        <Route path="/Contactus" component={ContactUs} />

        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}
