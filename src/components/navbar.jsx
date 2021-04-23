import React from "react";
import {Link} from 'react-router-dom'; 

//content for these components are inside bundle.js file 
// All our components are part of our bundle, they are download ahead of time when the application loads 
//there is no need to redownload  this bundle every time whenver use navigates from one component to another 

// link prevents additional http request to the server 

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
