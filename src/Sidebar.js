import React from "react";
import "./Sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Button} from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitter icon */}
      <TwitterIcon className="twitterIcon" />

      {/* sidebar options */}
      
        <Sidebaroptions Icon={HomeIcon} text="Home" />
     
        <Sidebaroptions Icon={TagIcon} text="explore" />
      
        <Sidebaroptions Icon={NotificationsActiveIcon} text="Notification" />

        <Sidebaroptions Icon={AccountCircleIcon} text="profile" />

      {/* sidebar options */}
      <Button  variant="contained" className="sidebar_tweet">Tweet </Button>
      
     
      {/* tweet button */}
    </div>
  );
}

export default Sidebar;
