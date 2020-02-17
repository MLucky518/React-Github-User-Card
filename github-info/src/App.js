import React, { Component } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerList from "./components/FollowerList";
import GitHubCalendar from "react-github-calendar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      userText: "MLucky518"
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
    fetch(`https://api.github.com/users/${this.state.userText}/followers`)
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

  fetchUser = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${this.state.userText}`)
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
  handleChange = e => {
    this.setState({ userText: e.target.value });
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Select a user</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChange}
        />
        <button onClick={this.fetchUser}>Switch User</button>
        <button onClick={this.fetchFollowerData}>Switch Followers </button>

        <UserCard user={this.state.user} />
        <div className="calendar">
          <GitHubCalendar username={this.state.user.login} />
        </div>
        <FollowerList
          user={this.state.user.login}
          followers={this.state.followers}
        />
      </div>
    );
  }
}
export default App;
