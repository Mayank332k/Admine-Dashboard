import { useState } from "react";
import LoginPage from "./components/login_page";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserBody from "./components/userBody";
import AddUser from "./components/addUser";
import Setting from "./components/Settings";
import DelWarning from "./components/delete_Warning";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [DelWar, setDelWar] = useState(null);
  const [dataId, setdataId] = useState();

  const [adminCreds, setAdminCreds] = useState({
    id: "Admin",
    password: "Admin123",
  });

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [usersData, setusersData] = useState([]);

  const AddData = (name, email, role) => {
    if (!name.trim() || !email.trim() || !role.trim()) {
      alert("Please fill in all fields before adding.");
      return;
    }

    setusersData([
      {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
      },
      ...usersData,
    ]);
  };

  const DeleteData = (id) => {
    setusersData(usersData.filter((user) => user.id !== id));
  };

  return (
    <>
      {!isAuthenticated && (
        <LoginPage
          adminCreds={adminCreds}
          setAuthenticated={setAuthenticated}
        ></LoginPage>
      )}

      {isAuthenticated && (
        <div className="parent">
          <Sidebar
            setAuthenticated={setAuthenticated}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === "Dashboard" && <Dashboard usersData={usersData} />}

          {activeTab === "Users" && (
            <UserBody
              setdataId={setdataId}
              setDelWar={setDelWar}
              setActiveTab={setActiveTab}
              usersData={usersData}
              DeleteData={DeleteData}
            />
          )}

          {activeTab === "AddUser" && (
            <AddUser
              AddData={AddData}
              name={name}
              email={email}
              role={role}
              setName={setName}
              setemail={setemail}
              setrole={setrole}
              setActiveTab={setActiveTab}
            />
          )}

          {DelWar === true && (
            <DelWarning
              setDelWar={setDelWar}
              dataId={dataId}
              DeleteData={DeleteData}
            />
          )}

          {activeTab === "Settings" && (
            <Setting
              adminCreds={adminCreds}
              setAdminCreds={setAdminCreds}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      )}
    </>
  );
};

export default App;
