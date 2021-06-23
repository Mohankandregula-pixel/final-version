import React, { useEffect, useState } from "react";
import thapapic from "../images/thapa1.png";
import aboutpic from "../images/aboutpic.png";
import Table from "./Table";
import Table2 from "./Table2";
import Tpostatus from './Tpostatus';
import PostList from './PostList'

import { useHistory } from "react-router-dom";
import Edit from "./Edit";

// const {student, TPO} = React.createContext();

const About = () => {
 

  return (
    <>
   







      
        <div className="container emp-profile">
          <h1>TPO PAGE</h1>
          <Tpostatus />
                    <br/>
                    {/* <h1>Posts</h1> */}
                    {/* <Statusview /> */}
                    <PostList />
        </div>
     
    </>
  );
};

export default About;
