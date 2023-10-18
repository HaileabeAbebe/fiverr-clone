import { useEffect, useRef } from "react";
import React, { useState } from "react";
import "./Gigs.scss";
// import { gigs } from "../../components/Data";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  let minRef = useRef();
  let maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest(
        `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
      ).then((res) => {
        return res.data;
      }),
  });

  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ["gigs"],
  //   queryFn: () =>
  //     newRequest
  //       .get(`/gigs${search}`, {
  //         params: {
  //           min: minRef.current.value,
  //           max: maxRef.current.value,
  //         },
  //       })
  //       .then((res) => {
  //         return res.data;
  //       }),
  // });

  const resort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    setOpen(false);
    refetch();
  };
  return (
    <div className="gigs">
      <div className="container">
        <div>
          <span className="breadcrumbs">Fiverr &gt; Graphics</span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technoglogy with Fiverr&apos; s AI
            artists
          </p>
        </div>
        <div className="menu">
          <div className="left">
            Budget <input ref={minRef} type="text" placeholder="min" />
            <input ref={maxRef} type="text" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => resort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => resort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading..."
            : error
            ? console.log(error)
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
