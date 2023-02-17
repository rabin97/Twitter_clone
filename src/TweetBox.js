import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="Tweetbox">
      <form>
        <div className="tweetBox_input">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <input placeholder="whats up buddy" type="text" />
        </div>
        <Button variant="contained" className="TextBox_button">
          Tweet{" "}
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
