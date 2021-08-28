import React from "react";

import "./card.css";

const Card = ({ lang, url, fcolor, scolor }) => {
  return (
    <div className="card">
      <img src={url} alt="lang.svg" />
      <h3>{lang}</h3>
    </div>
  );
};

export default Card;
