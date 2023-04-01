import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Fiverr &gt; Graphics & Design &gt;
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
              alt=""
            />
            <span>John smith</span>
            <div className="star">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I&apos;ve found it often excels at are: Character
            portraits (E.g. a picture to go with your DnD character) Landscapes
            (E.g. wallpapers, illustrations to compliment a story) Logos (E.g.
            Esports team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you&apos;re more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
};

export default Gig;
