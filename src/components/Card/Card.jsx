import React from "react";
import PropTypes from "prop-types";

import "./card.css";

const Card = ({ lang, url, fcolor, scolor }) => {
  return (
    <div
      className="card"
      style={{ background: `linear-gradient(to left, ${fcolor}, ${scolor})` }}
    >
      <img src={url} alt="lang.svg" />
      <h3>{lang}</h3>
    </div>
  );
};

Card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fscolor: PropTypes.string,
  scolor: PropTypes.string,
};

export default Card;
