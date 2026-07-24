import React from "react";
import PropTypes from "prop-types";

const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.img} alt={props.name} />
    </div>
  );
};

Pizza.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.img,
};

export default Pizza;
