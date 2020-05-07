import React from "react";
import "./ListItem.css";
import danAbramovImage from "../../../assets/images/danabramov.jpg";

const ListItem = () => {
  return (
    <li className="listItem__wrapper">
      <img src={danAbramovImage} alt="" className="listItem__imaage" />
      <div>
        <h2 className="listItem__name">Dan Abramov</h2>
        <p className="listItem__description">
          'Making React accessible for users and developers at
          https://reach.tech . Online learning, workshops, OSS, and consulting.'
        </p>
        <button className="listItem__button">visit twitter page</button>
      </div>
    </li>
  );
};

export default ListItem;
