import * as React from "react";
import "./style.css";
import CardForm from "./cardForm";
import CardList from "./cardList";

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
export default class App extends React.Component<any> {
  state = {
    profiles: [], //[testData],
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
        <CardForm onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
