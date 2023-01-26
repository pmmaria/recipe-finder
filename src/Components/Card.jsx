import React from "react";

const Card = ({ src, title, button }) => {
  return (
    <div className=" p-2">
      <div className="card card-container">
        <img className="card-img-top card-image" src={src} alt={title} />
        <div className="card-body">
          <h3 className="card-title title-category">{title}</h3>
          <button className="btn-sm btn-outline-danger btn-card">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
