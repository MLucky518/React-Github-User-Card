import React, { Component } from "react";
import FollowerCard from "./FollowerCard";


class FollowerList extends Component {
  render() {
    return (
      <div>
        {this.props.followers.map(user => {
          return <FollowerCard url = {user.html_url} key = {user.id} login = {user.login} pic = {user.avatar_url}/>;
        })}
      </div>
    );
  }
}

export default FollowerList;
