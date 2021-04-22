import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="./services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through the islands of bali"
              label="luxury"
              path="./services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="./services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="travel through the islands of bali"
              label="luxury"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="./services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through the islands of bali"
              label="luxury"
              path="./services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="./services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
