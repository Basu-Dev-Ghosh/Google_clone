import React from "react";
import './Home.css'
import Google from '../images/Google.png'
import { NavLink } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import Search from '../components/Search'
import { Avatar } from "@mui/material";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_header">
          <div className="home_headerLeft">
           
          </div>
          <div className="home_headerRight">
            <NavLink to="/gmail">Gmail</NavLink>
            <NavLink to="/images">Images</NavLink>
            <AppsIcon/>
            <Avatar/>
          </div>
        </div>
        <div className="home_body">
            <img src={Google} alt="" />
            <Search/>
        </div>
      </div>
    </>
  );
};

export default Home;
