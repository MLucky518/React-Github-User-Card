import React, { Component } from "react";
import FollowerCard from "./FollowerCard";
import "./FollowerList.scss";

class FollowerList extends Component {
  render() {
    return (
      <div className = "follower-list-container">
          
        {this.props.followers.map(user => {
          return (
              
            <FollowerCard className = "follower-card"
              url={user.html_url}
              key={user.id}
              login={user.login}
              pic={user.avatar_url}
            />
          );
        })}
      </div>
    );
  }
}

export default FollowerList;
