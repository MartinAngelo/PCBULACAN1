import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function ContactUs() {
  return (
    <div className="Contactus">
      <Header />
      <Nav />
      <h2>Contact Us</h2>
      <h3>PC Bulacan Baliwag Branch</h3>

      <p>0915 062 4606 / 0931 037 5362 / 044 308 9192</p>

      <h3>PC Bulacan Malolos Branch</h3>
      <p> 0995 436 3615 / 0933 338 2424</p>
      <h3>Facebook Page</h3>
      <p>PC Bulacan</p>

      <address>
        You can also Contact us directly at{" "}
        <a href="https://pcbulacanhr@gmail.com" id="address">
          pcbulacanhr@gmail.com{" "}
        </a>
      </address>
      <Footer />
    </div>
  );
}
