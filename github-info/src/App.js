import React, { Component } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerList from "./components/FollowerList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  fetchUserData = () => {
    fetch("https://api.github.com/users/MLucky518")
      .then(res => {
        return res.json();
      })

      .then(info => {
        console.log(info);
        this.setState({ user: info });
      })

      .catch(err => {
        console.log("no info", err);
      });
  };

  componentDidMount() {
    console.log("mount");
    this.fetchUserData();
    this.fetchFollowerData();
  }

  fetchFollowerData = () => {
    fetch("https://api.github.com/users/MLucky518/followers")
      .then(res => {
        return res.json();
      })

      .then(info => {
        console.log(info);
        this.setState({ followers: info });
      })

      .catch(err => {
        console.log("no info", err);
      });
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Select a user</h1>
        <UserCard user={this.state.user} />
        <FollowerList followers = {this.state.followers}/>
      </div>
    );
  }
}
export default App;
