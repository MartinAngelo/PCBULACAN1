import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header"
import Footer from "../Component/Footer"

export default function Notfound() {
  return (
    <div>
      <Header />
      <Nav />
      <h1>404 NOT FOUND</h1>
      <p>The Page is not available</p>
      <Footer />
    </div>
  );
}
