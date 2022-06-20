import * as React from "react";
import "./style.css";

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
  },
];

const CardList = (props: any) => (
  <div>
    {testData.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

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

export default function App(props: any) {
  return (
    <div>
      <div className="header">{props.title}</div>
      <CardList />
    </div>
  );
}
