import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Wallpaper from "../Pictures/2nd.jpg";

export default function Home() {
  return (
    
    <div>
      <Header />
      <Nav />
      <img class="background" src={Wallpaper} alt="bg"/>
      <Footer />
    </div>
  );
}
