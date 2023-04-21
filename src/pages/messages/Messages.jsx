import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Smith",
    isSeller: true,
  };
  return (
    <div className="messages">
      <div className="container">
        <h1>Messages</h1>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
                alt=""
              />
            </td>
            <td>Mahlet Kindie</td>
            <td>15</td>
            <td>110</td>
            <td>
              <img className="deleteIcon" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
                alt=""
              />
            </td>
            <td>Mahlet Kindie</td>
            <td>15</td>
            <td>110</td>
            <td>
              <img className="deleteIcon" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
                alt=""
              />
            </td>
            <td>Mahlet Kindie</td>
            <td>15</td>
            <td>110</td>
            <td>
              <img className="deleteIcon" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
                alt=""
              />
            </td>
            <td>Mahlet Kindie</td>
            <td>15</td>
            <td>110</td>
            <td>
              <img className="deleteIcon" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
                alt=""
              />
            </td>
            <td>Mahlet Kindie</td>
            <td>15</td>
            <td>110</td>
            <td>
              <img className="deleteIcon" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
