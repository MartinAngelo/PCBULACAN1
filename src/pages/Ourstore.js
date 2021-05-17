import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Ourstore() {
  return (
    <div >
      <Header />
      <Nav />
      <form className="Ourstore">
      <h3>OUR STORE</h3>
      <h3>PC Bulacan - Baliwag Branch</h3>
      <p>
        Our Baliwag Store Open at Monday-Sunday 9am-6pm Brgy. Tibag, Baliwag,
        Bulacan (beside Converge and infront of Sprint Gas Station) 0915 062
        4606 / 0931 037 5362 / 044 308 9192
      </p>

      <h3>PC Bulacan - Malolos Branch</h3>
      <p>
        Our Malolos Store Open at Monday-Sunday 9am-7pm The Cabanas, Brgy.
        Longos, City of Malolos, Bulacan (Near 7 Eleven) 0995 436 3615 / 0933
        338 2424
      </p>
      </form>
      <Footer />
      
    </div>
  );
}
