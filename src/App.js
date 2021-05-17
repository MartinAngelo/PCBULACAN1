import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import firebase from "./utils/firebase";

import { useState, useEffect } from "react";

/*CSS*/
import "./Css/Navcss.css";
import "./Css/header.css";
import "./Css/Footer.css";
import "./Css/Events.css";
import "./Css/Contactus.css";
import "./Css/Home.css";
import "./Css/login.css";
import "./Css/Ourstore.css";
import "./Css/404.css";
import "./Css/Product.css";
import "./Css/Circle.css"

/**Route*/
import PrivateRoute from  "./Routers/PrivateRoute";
import PublicRoute from  "./Routers/PublicRoute";

/*PAGES*/
import Home from "./pages/Home";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Ourstore from "./pages/Ourstore";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";


/*404*/
import Notfound from "./pages/404";

export default function App() {
  //loading
  const [state, setState] = useState({
    isAuth: false,
    isLoading: true,
})



useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setState({ isAuth: true, isLoading: false })
        } else {
            //NO USER IS SIGN IN
            setState({ isAuth: false, isLoading: false })
        }
        console.log(user)
    });
}, [])

if (state.isLoading) {
    return <p>LOADING...</p>
}

  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/Login" exact/>
      </Route>
        {/*<Route path="/" component={Home} />*/}
        <PublicRoute component={Login} isAuth={state.isAuth}restricted={true} path="/login" exact />
        <PublicRoute component={Register} isAuth={state.isAuth}restricted={true}  path="/register" exact/>

        <PrivateRoute component={Home}  isAuth={state.isAuth} path="/Home" exact/>
        <PrivateRoute  component={Products} isAuth={state.isAuth} path="/Products" exact/>
        <PrivateRoute  component={Events} isAuth={state.isAuth} path="/Events"exact />
        <PrivateRoute  component={Ourstore} isAuth={state.isAuth} path="/Ourstore"exact />
        <PrivateRoute  component={ContactUs} isAuth={state.isAuth} path="/Contactus"exact/>
        <PrivateRoute  component={Profile} isAuth={state.isAuth} path="/Profile"exact/>
        
        

        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}
