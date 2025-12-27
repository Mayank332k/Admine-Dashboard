import Users from "./container";
import Card from "./Card";

const UserBody = ({
  usersData,
  setActiveTab,
  DeleteData,
  setDelWar,
  setdataId,
}) => {
  return (
    <Users setActiveTab={setActiveTab}>
      {usersData.map((user) => (
        <Card
          setdataId={setdataId}
          setDelWar={setDelWar}
          DeleteData={DeleteData}
          key={user.id}
          data={user}
        />
      ))}
    </Users>
  );
};

export default UserBody;
