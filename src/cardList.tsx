import Card from "./card";

const CardList = ({ profiles }: { profiles: any }): any => {
  return (
    <div>
      {profiles.map((profile: any) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
