import React from "react";
import Card from "./Card";
import Api from "./Api";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Api.map((arr, indx) => {
                return (
                  <Card key={indx} title={arr.title} imgSrc={arr.imgSrc} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
