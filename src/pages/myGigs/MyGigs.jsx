import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>My Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
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
              <img className="deleteIcon" src="/img/delete.png" alt="" />
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
              <img className="deleteIcon" src="/img/delete.png" alt="" />
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
              <img className="deleteIcon" src="/img/delete.png" alt="" />
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
              <img className="deleteIcon" src="/img/delete.png" alt="" />
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
              <img className="deleteIcon" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
