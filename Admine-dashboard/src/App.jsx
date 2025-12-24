import { useState } from "react";
import LoginPage from "./components/login_page";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserBody from "./components/userBody";
import AddUser from "./components/addUser";
import Setting from "./components/Settings";
import "./components/App.css";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const [adminCreds, setAdminCreds] = useState({
    id: "Admin",
    password: "Admin123",
  });

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [usersData, setusersData] = useState([]);

  const AddData = (name, email, role) => {
    setusersData([
      {
        id: Date.now(),
        name,
        email,
        role,
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
        />
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
