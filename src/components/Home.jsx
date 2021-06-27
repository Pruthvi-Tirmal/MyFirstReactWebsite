import React from "react";
import Common from "./Common";
import web from "../Logos/Home.svg";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgScr={web}
        visit="/service"
        btn="Get Started"
      />
    </>
  );
};

export default Home;
