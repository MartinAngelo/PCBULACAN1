import React from 'react'
import "../Contact.css";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eyt from "../images/8.jpg";

export default function About() {
    return (
        <div class="form">
            <h1>Food Recommendations</h1>
            <div>
                <h3>BreakFast</h3>
               	    <div class="img1">
                        <img class="image1" src={six} alt=""/>
                        <img class="image2" src={seven} alt=""/>
                        <img class="image3" src={eyt} alt=""/>    
                    </div>
            </div>

            </div>
            );
}
