import React from "react";

import { NavLink } from "react-router-dom";

const FooterPage = () => (
  <div className="footer">
    <ul className="navbar-nav ml-auto display-flex"> 
    <li className="nav-item">
       <NavLink className="nav-link" to="/Credits">Credits</NavLink>
                    </li>
      
  
      <li ><p>Akshitha  Rohini  Mohan Sravya Bhuvan</p></li>
    </ul>
   
  </div>
);

export default FooterPage;