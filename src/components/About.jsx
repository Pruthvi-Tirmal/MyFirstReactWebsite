import React from "react";
import Common from "./Common";
import web from "../Logos/About.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to my about page"
        imgScr={web}
        visit="/contact"
        btn="Contact Now"
      />
    </>
  );
};

export default About;
