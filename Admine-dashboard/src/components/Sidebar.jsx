import React, { useState } from "react";

const Sidebar = ({ activeTab, setActiveTab, setAuthenticated }) => {
  const [isLogoutHover, setIsLogoutHover] = useState(false);

  const styles = {
    container: {
      height: "100vh",
      width: "240px",
      backgroundColor: "#0d0d0d",
      color: "#c0c0c0",
      fontFamily: '"Courier New", Courier, monospace',
      padding: "10px",
      boxSizing: "border-box",
    },
    box: {
      border: "2px solid #333",
      height: "100%",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "16px",
      color: "#e0e0e0",
      marginBottom: "4px",
    },
    subtitle: {
      fontSize: "12px",
      color: "#888",
      marginBottom: "15px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#333",
      margin: "12px 0",
      border: "none",
    },
    navItem: {
      cursor: "pointer",
      marginBottom: "14px",
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
    },
    arrow: {
      fontSize: "10px",
      marginTop: "5px",
    },
    navText: {
      display: "flex",
      flexDirection: "column",
    },
    navTitle: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    navDesc: {
      fontSize: "12px",
      color: "#777",
    },
    session: {
      marginTop: "auto",
    },
    logout: {
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "8px",
    },
  };

  const nav = (key, title, desc) => (
    <div style={styles.navItem} onClick={() => setActiveTab(key)}>
      <span
        style={{
          ...styles.arrow,
          color: activeTab === key ? "#ff3333" : "#444",
        }}
      >
        ▶
      </span>
      <div style={styles.navText}>
        <span
          style={{
            ...styles.navTitle,
            color: activeTab === key ? "#ff3333" : "#ccc",
          }}
        >
          {title}
        </span>
        <span style={styles.navDesc}>{desc}</span>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div>
          <div style={styles.title}>Admin Panel</div>
          <div style={styles.subtitle}>Management Console</div>
        </div>

        <hr style={styles.divider} />

        {nav("Dashboard", "Dashboard", "System overview")}
        {nav("Users", "Users", "Manage users")}
        {nav("Settings", "Settings", "Admin credentials")}

        <div style={styles.session}>
          <hr style={styles.divider} />
          <div style={{ fontSize: "13px", color: "#aaa" }}>
            Admin<br />
            admin<span style={{ color: "#4d94ff" }}>@system</span>.com
          </div>

          <div
            style={{
              ...styles.logout,
              color: isLogoutHover ? "#ff3333" : "#ccc",
            }}
            onClick={() => setAuthenticated(false)}
            onMouseEnter={() => setIsLogoutHover(true)}
            onMouseLeave={() => setIsLogoutHover(false)}
          >
            [ Logout ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;