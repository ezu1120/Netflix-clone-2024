import React from "react";
import "./header.css";
import Netflix_logo from "../Asset/img/Netflix_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="heade_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflix_logo} alt="Netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
