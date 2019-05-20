import React from "react";
import Navigation from "./Navigation";

import "../styles/home-page.css";

import Image from "../img/home-img.svg";

function Home(props) {
    return (
        <div className="home-page-wrapper">
            <Navigation />
            <div className="home-content">
                <img src={Image} alt="Done checking" />
                <div className="home-text">
                    <h1>It's our Home Page!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore dignissimos a facilis iste delectus facere iure est illo eaque perspiciatis sed beatae aliquid doloribus dolorem minima fugiat, ut rerum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem excepturi odio libero asperiores commodi quasi hic, accusamus minus blanditiis saepe facere, praesentium nesciunt quas aut harum minima nihil voluptates laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, ipsa facere tenetur qui vero accusamus labore nostrum molestias iusto illum possimus iste laborum vel, deserunt voluptatibus ut enim quam recusandae.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;