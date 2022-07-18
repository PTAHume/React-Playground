import * as React from "react";
import { Agent } from "./Agent";
export default class Form extends React.Component<any> {
  //use ref example: (1)
  //userInputRef = React.createRef<HTMLInputElement>();
  state = { userName: "" };
  handleSubmit: any = async (event: any) => {
    event.preventDefault();
    const resp = await new Agent(this.state.userName).GetCard();
    /*
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      */
    this.props.onSubmit(resp);
    this.setState({ userName: "" });
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
