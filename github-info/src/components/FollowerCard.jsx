import React, { Component } from "react";

class FollowerCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.login}</h1>
        <a href={this.props.url}>
          <img className="follower-pics" src={this.props.pic} />
        </a>
      </div>
    );
  }
}

export default FollowerCard;