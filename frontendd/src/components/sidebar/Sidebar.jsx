import React from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      {/* <span className="sidebarTitle">ABOUT US</span>
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
      />
      <p>
        On this platform you can read coding related articles and write your own articles too.
      </p> */}
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Life">
            React
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Music">
            Django
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Sport">
            Machine learning
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Style">
            Style
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Tech">
            Tech
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Cinema">
            Cinema
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Cinema">
            News
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  )
}

export default Sidebar