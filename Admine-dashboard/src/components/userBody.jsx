import Users from "./container";
import Card from "./Card";

const UserBody = ({ usersData, setActiveTab, DeleteData }) => {
  return (
    <Users setActiveTab={setActiveTab}>
      {usersData.map((user) => (
        <Card DeleteData={DeleteData} key={user.id} data={user} />
      ))}
    </Users>
  );
};

export default UserBody;
