import React, { useState } from "react";

const Users = ({ children, setActiveTab }) => {
  const [isAddHover, setIsAddHover] = useState(false);

  const styles = {
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#0d0d0d",
      color: "#c0c0c0",
      fontFamily: '"Courier New", Courier, monospace',
      padding: "20px",
      boxSizing: "border-box",
      height: "100vh", // full height
      display: "flex",
    },
    outerFrame: {
      border: "2px solid #333",
      padding: "20px",
      flex: 1, // expand
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column", // column layout
    },
    headerGroup: {
      marginBottom: "30px",
    },
    mainTitle: {
      fontSize: "24px",
      color: "#e0e0e0",
      margin: "0 0 5px 0",
      fontWeight: "normal",
    },
    subTitle: {
      fontSize: "14px",
      color: "#666",
      marginTop: "5px",
    },
    addUserBtn: {
      marginTop: "25px",
      marginBottom: "35px",
      fontSize: "16px",
      color: isAddHover ? "#fff" : "#888",
      cursor: "pointer",
      display: "inline-block",
      transition: "color 0.2s ease",
      fontWeight: "bold",
      alignSelf: "flex-start",
    },
    cardList: {
      flex: 1, // take remaining space
      overflowY: "auto", // scroll only cards
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
      gap: "20px",
      width: "100%",
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.outerFrame}>
        {/* Header */}
        <div style={styles.headerGroup}>
          <h1 style={styles.mainTitle}>Users</h1>
          <p style={styles.subTitle}>Manage system users</p>
        </div>

        {/* Add Button */}
        <div
          style={styles.addUserBtn}
          onMouseEnter={() => setIsAddHover(true)}
          onMouseLeave={() => setIsAddHover(false)}
          onClick={() => {setActiveTab("AddUser")}}
        >
          [ + Add User ]
        </div>

        {/* Scrollable Cards */}
        <div style={styles.cardList}>{children}</div>
      </div>
    </div>
  );
};

export default Users;
