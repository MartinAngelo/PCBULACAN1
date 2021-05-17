import React from "react";
import logo from "../Pictures/logo.png";

export default function Header() {
  return (
    <div className="header">
      <img class="logo" src={logo} alt="bg" />

      <form class="example" action="/404">
        <input type="text" placeholder="Search.." name="search2"></input>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
