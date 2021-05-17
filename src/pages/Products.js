import React from "react";
import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

/*PICTURES*/

import p1 from "../Pictures/desktop/134465210_1682405911933765_443339648229058383_o.jpg";
import p2 from "../Pictures/desktop/134465213_1682405801933776_6103802541067823770_o.jpg";
import p3 from "../Pictures/desktop/135270845_1682405505267139_1477125095100813057_o.jpg";
import p4 from "../Pictures/desktop/135319700_1682405865267103_4598833117767203292_o.jpg";
import p5 from "../Pictures/desktop/136055805_1682405835267106_8671638602465631385_o.jpg";
import p6 from "../Pictures/desktop/139263734_1693656924141997_543211300657844367_o.jpg";
import p7 from "../Pictures/desktop/139975526_1693656794142010_730504718564732515_o.jpg";
import p8 from "../Pictures/desktop/140071408_1693656840808672_6675880693155062172_o.jpg";

import c1 from "../Pictures/Circle/desktop.png";
import c2 from "../Pictures/Circle/NETWORK DEVICES.png";
import c3 from "../Pictures/Circle/LAPTOP.png";
import c4 from "../Pictures/Circle/peripherals.png";
import c5 from "../Pictures/Circle/printers.png";

export default function Products() {
  return (
    <div>
      <Header />
      <Nav />

      <div>
        <div className="circle-button">
          <div className="">
            <div class="desktop">
              <img
                className="c1"
                src={c1}
                alt="Denim Jeans"
                class="laptop"
              ></img>
            </div>

            <div className="network">
              <img
                className="c2"
                src={c2}
                alt="Denim Jeans"
                class="laptop"
              ></img>
            </div>

            <div className="laptop">
              <img
                className="c3"
                src={c3}
                alt="Denim Jeans"
                class="laptop"
              ></img>
            </div>

            <div className="peripheral">
              <img
                className="c4"
                src={c4}
                alt="Denim Jeans"
                class="laptop"
              ></img>
            </div>

            <div className="printer">
              <img
                className="c5"
                src={c5}
                alt="Denim Jeans"
                class="laptop"
              ></img>
            </div>
          </div>
        </div>

        <div>
          <div className="containers">
            <div id="prod1">
              <div className="card">
                <img className="p1" src={p1} alt="Denim Jeans"></img>
                <h3>ASUS GEFORCE GTX </h3>
                <p class="price">₱49,500</p>
                <p>ASUS</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
            <div id="prod2">
              <div className="card">
                <img className="p2" src={p2} alt="Denim Jeans"></img>
                <h3>Theta</h3>
                <p class="price">₱15,500.00</p>
                <p>ASUS</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
            <div id="prod3">
              <div className="card">
                <img className="p3" src={p3} alt="Denim Jeans"></img>
                <h3>LOGITECH G302 </h3>
                <p class="price">₱1,780.00</p>
                <p>Logitech</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>

            <div id="prod4">
              <div class="card">
                <img className="p4" src={p4} alt="Denim Jeans"></img>
                <h3>Z607</h3>
                <p class="price">₱6,550.00</p>
                <p>Logitech</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>

            <div id="prod11">
              <div class="card">
                <img className="p5" src={p5} alt="Denim Jeans"></img>
                <h3>STHN2000405</h3>
                <p class="price">₱4,450.00</p>
                <p>Seagate</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>

            <div id="prod22">
              <div class="card">
                <img className="p6" src={p6} alt="Denim Jeans"></img>
                <h3>FX-EHD-A1T</h3>
                <p class="price">₱3,760.00</p>
                <p>ASUS</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>

            <div id="prod33">
              <div className="card">
                <img className="p7" src={p7} alt="Denim Jeans"></img>
                <h3>Z121 USB POWERED</h3>
                <p class="price">₱595.00</p>
                <p>Logitech</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>

            <div id="prod44">
              <div className="card">
                <img className="p8" src={p8} alt="Denim Jeans"></img>
                <h3>STHH2000301</h3>
                <p class="price">₱5,150.00</p>
                <p>Seagate</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
