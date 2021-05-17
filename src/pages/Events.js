import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Events() {
  return (
    <div className="Events">
      <Header />
      <Nav />

      <h2 className = "eventcss">Happy 50K Likes PC Bulacan!</h2>
      <h3 className = "eventcss">
        Happy 50K Likes PC Bulacan! Wanna join our RAFFLE? 😉 Kindly fill up
        this form and make sure to read the mechanics below.
        <a href="https://forms.gle/LjoHLqvN1ZmYKA9u6">
          https://forms.gle/LjoHLqvN1ZmYKA9u6
        </a>
        Mechanics: like our page --- PC Bulacan
      </h3>
      <ol>
        <li>Fill up the form and complete the details needed.</li>
        <li>Make sure to LIKE and SHARE our FACEBOOK PAGE publicly.</li>
        <li>1 Entry per Person only</li>
        <li>
          Share this to your family and friends. The more you entries you send,
          the more chances of wiinning
        </li>
        <li>
          You have 72hours to send your entry. We will verify all the entries
          afterwards.
        </li>
        Hurry up send your entries now! Get a chance to win very awesome prizes!{" "}
        <b>#50kLikes #PCBulacan</b>
      </ol>
      <Footer />
    </div>
  );
}
