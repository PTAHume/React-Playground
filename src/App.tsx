import axios from "axios";
import * as React from "react";
import "./style.css";

/*
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  }
];
*/

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props: any) => (
  <div>
    {props.profiles.map((profile: any) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Form extends React.Component<any> {
  //use ref example: (1)
  //userInputRef = React.createRef<HTMLInputElement>();
  state = { userName: "" };
  handleSubmit: any = async (event: any) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState ({ userName: ''})
    //use ref example: (2)
    //console.log(this.userInputRef.current?.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          //use ref example: (3)
          //ref={this.userInputRef}
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
          minLength={2}
        />
        <button>Add Card</button>
      </form>
    );
  }
}
class Card extends React.Component<any> {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: "1rem" }}>
        <img title="place-hold" alt="Missing" src={profile.avatar_url} />
        <div className="info" style={{ display: "inline-block", margin: 10 }}>
          <div className="name" style={{ fontSize: "125%" }}>
            {profile.name}
          </div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component<any> {
  state = {
    profiles: []//[testData],
  };
  addNewProfile = (profileData: any) => {
    this.setState((prevState: any) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
