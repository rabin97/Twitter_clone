import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js"
function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed_header"> <h3>Home</h3> </div>

      {/* tweet box */}
        <TweetBox/>

          {/* post  */}
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          
    </div>
  );
}

export default Feed;
