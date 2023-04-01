import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className="desc">{item.desc}</p>
          <div className="rating">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
          <hr />
          <div className="details">
            <img src="./img/heart.png" alt="" />
            <span>STARTING AT ${item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
