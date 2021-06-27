import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ imgSrc, title }) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgSrc} className="card-img-top" alt="Services icons" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{title}</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              exercitationem cupiditate consequuntur! Saepe, reprehenderit
              laborum dignissimos distinctio excepturi ipsum vitae
            </p>
            <NavLink to="#" className="btn btn-primary">
              Click Here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
