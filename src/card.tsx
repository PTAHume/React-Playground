import * as React from "react";
export default class Card extends React.Component<any> {
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
