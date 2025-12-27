import { useState } from "react";

const Card = ({ data, setdataId, setDelWar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleteHover, setIsDeleteHover] = useState(false);

  const styles = {
    container: {
      border: isHovered ? "1px solid #fff" : "1px solid #333",
      padding: "25px",
      backgroundColor: "#0d0d0d",
      transition: "all 0.3s ease",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",

      width: "400px",
      height: "210px",

      fontFamily: '"Courier New", Courier, monospace',
    },
    topRow: {
      display: "flex",
      alignItems: "flex-start",
      gap: "15px",
      flexWrap: "wrap",
    },
    avatarPlaceholder: {
      color: "#666",
      fontSize: "20px", // Larger Avatar Icon
      fontWeight: "bold",
      marginTop: "2px",
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    userName: {
      fontSize: "22px", // Larger Name
      color: "#e0e0e0",
      margin: 0,
      fontWeight: "bold", // Bolder
    },
    userEmail: {
      fontSize: "15px", // Larger Email
      color: "#888",
      margin: 0,
    },
    blueText: {
      color: "#4d94ff",
    },
    detailsRow: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    detailText: {
      fontSize: "16px", // Larger Detail Text
      color: "#aaa",
      display: "flex",
      alignItems: "center",
      fontWeight: "500",
    },
    statusDot: {
      height: "12px", // Larger Dot
      width: "12px",
      backgroundColor: "#28a745",
      borderRadius: "50%",
      display: "inline-block",
      marginRight: "10px",
    },
    actionRow: {
      display: "flex",
      justifyContent: "flex-end",
    },
    actionBtn: {
      fontSize: "15px", // Larger Button Text
      cursor: "pointer",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      color: isDeleteHover ? "#ff3333" : "#666",
      textDecoration: isDeleteHover ? "underline" : "none",
      fontWeight: "bold",
    },
    schematicConnector: {
      position: "absolute",
      right: "-10px",
      top: "20px",
      bottom: "20px",
      width: "10px",
      borderRight: "1px solid #333",
      borderTop: "1px solid #333",
      borderBottom: "1px solid #333",
      pointerEvents: "none",
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row 1: Identity */}
      <div style={styles.topRow}>
        <div style={styles.avatarPlaceholder}>[Avatar]</div>
        <div style={styles.userInfo}>
          <div style={styles.userName}>{data.name}</div>
          <div style={styles.userEmail}>
            {data.email}
            <span style={styles.blueText}>@system</span>.com
          </div>
        </div>
      </div>

      {/* Row 2: Role & Status */}
      <div style={styles.detailsRow}>
        <span style={styles.detailText}>Role: {data.role}</span>
        <span style={styles.detailText}>
          <span style={styles.statusDot}></span>
          Active
        </span>
      </div>

      {/* Row 3: Delete Action */}
      <div style={styles.actionRow}>
        <span
          style={styles.actionBtn}
          onMouseEnter={() => setIsDeleteHover(true)}
          onMouseLeave={() => setIsDeleteHover(false)}
          onClick={() => {
            setdataId(data.id);
            setDelWar(true);
          }}
        >
          ✖ Delete
        </span>
      </div>

      <div style={styles.schematicConnector}></div>
    </div>
  );
};

export default Card;
