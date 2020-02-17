import React, { Component } from "react";
import "./UserCard.scss";

class UserCard extends Component {
  render() {
    return (
      <div className="user-card-container">
        <img className = "user-pic" src={this.props.user.avatar_url} alt="user avatar" />
        <h1>{this.props.user.login}</h1>

        <ul>
          <li>
            Find me at:{" "}
            <a href={this.props.user.html_url}>
              <button>MY GITHUB</button>
            </a>
          </li>
          <li>{this.props.user.location}</li>
          <li>{this.props.user.bio}</li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
