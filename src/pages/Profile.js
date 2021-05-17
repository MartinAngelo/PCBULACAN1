import React, { useEffect, useState } from 'react'
import Nav from "../Component/Nav"
import dp from "../Pictures/Circle/desktop.png";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

import firebase from "../utils/firebase";

export default function Profile() {

    const [state, setState] = useState({
        user: null
    })

    useEffect(() => {
        var signedUser = firebase.auth().currentUser;

        if (signedUser) {
            // User is signed in.
            setState({ user: signedUser })
        } else {
            // No user is signed in.
            setState(null)
        }
    }, [])



    return (
        <div>
            <Header />
            <Nav />
          

            
            <h1 class="welcome">Welcome   {state.user ? state.user.email : "null"}</h1>
            <p class="tag">Email : {state.user ? state.user.email : "null"}</p>


            <Footer />
        </div>
    )
}
