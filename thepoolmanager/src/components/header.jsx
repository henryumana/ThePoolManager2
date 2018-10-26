import React from "react";
import {NavLink}  from 'react-router-dom';

const LoggedIn = (
  <div>
  <ul className="nav navbar-nav">
    </ul>
  </div>
)

const LoggedOut = (
  <ul className="nav navbar-nav navbar-right">
    <li><NavLink to ='/'>Sign In</NavLink></li>
    <li><NavLink to ='/SignUp'>Sign Up</NavLink></li>
  </ul>
)

const HeaderBar = ({isAuthed}) => {
return (
 <div >
<nav className="navbar navbar-inverse">
 <div className="container-fluid">
   <div className="navbar-header">
     <a className="navbar-brand" href="#"></a>
   </div>
   {isAuthed ? LoggedIn : LoggedOut}
 </div>
</nav>
 </div>
 )
}
export default HeaderBar;
