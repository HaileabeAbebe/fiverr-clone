import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GigCard.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading..."
          ) : error ? (
            console.log(error)
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p className="desc">{item.desc}</p>
          <div className="rating">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
          <hr />
          <div className="details">
            <img src="./img/heart.png" alt="" />
            <div className="price">
              <span>STARTING AT</span>
              <h2>$ {item.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
