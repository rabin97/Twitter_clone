import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';



function Post({ displayname, username, verified, text, avator }) {
  return (
    <div className="post">
      <div className="post_avator">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>

      <div className="post_body">
        <div className="port_header">
          <div className="poet_header_text">
            <h3>
              Rabin
              <span>
                <VerifiedIcon className="post_verification_icon" />
              </span>
            </h3>
          </div>
          <div className="post_header_description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              maiores optio voluptatum repudiandae dolo
            </p>
          </div>
        </div>
        <img
          className="post_immage"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
          alt="immage"
        />
        <div className="post_footer">
          <WifiProtectedSetupIcon/>
          <FavoriteIcon/>
          <MessageIcon/>
          <ShareIcon/>
        </div>
      </div>
    </div>
  );
}

export default Post;
