import React, { useState } from "react";
import "./App.css";

const Dashboard = ({ usersData }) => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    container: {
      flex: 1, // Takes up remaining space next to sidebar
      backgroundColor: "#0d0d0d",
      color: "#c0c0c0",
      fontFamily: '"Courier New", Courier, monospace',
      padding: "40px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflowY: "auto",
    },
    outerFrame: {
      border: "2px solid #333",
      padding: "30px",
      position: "relative",
      height: "100%",
      minHeight: "600px",
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
    divider: {
      height: "1px",
      backgroundColor: "#333",
      border: "none",
      width: "80%",
      margin: "20px 0 40px 0",
    },

    contentGrid: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      maxWidth: "800px",
      position: "relative",
    },
    topRow: {
      display: "flex",
      gap: "25px",
    },

    card: (id) => ({
      border: hoveredCard === id ? "1px solid #fff" : "1px solid #333", // Highlight on hover
      padding: "25px",
      backgroundColor: "#0d0d0d",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      zIndex: 2,
    }),
    cardSquare: {
      width: "200px",
      height: "120px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardWide: {
      width: "100%",
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    // Text Styles inside cards
    label: {
      fontSize: "14px",
      color: "#888",
      letterSpacing: "1px",
      marginBottom: "10px",
    },
    valueBig: {
      fontSize: "28px",
      color: "#d49a44", // The specific amber/orange from image
      fontWeight: "bold",
    },
    valueText: {
      fontSize: "16px",
      color: "#ccc",
    },
    highlight: {
      color: "#d49a44",
    },

    // Status Dot
    statusRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    dot: {
      height: "10px",
      width: "10px",
      backgroundColor: "#888",
      borderRadius: "50%",
    },

    treeContainer: {
      position: "absolute",
      top: "0",
      right: "-30px",
      bottom: "0",
      width: "20px",
      borderRight: "1px solid #333",
    },
    horizontalLine: {
      position: "absolute",
      right: "0",
      height: "1px",
      width: "15px",
      backgroundColor: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.outerFrame}>
        {/* Header */}
        <div style={styles.headerGroup}>
          <h1 style={styles.mainTitle}>Dashboard</h1>
          <p style={styles.subTitle}>System Overview</p>
        </div>

        <hr style={styles.divider} />

        <div style={styles.contentGrid}>
          {/* Top Row: 2 Square Boxes */}
          <div style={styles.topRow}>
            {/* Total Users */}
            <div
              style={{ ...styles.card("users"), ...styles.cardSquare }}
              onMouseEnter={() => setHoveredCard("users")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={styles.label}>Total Users</span>
              <span style={styles.valueBig}>{usersData.length}</span>
            </div>

            {/* Active Users */}
            <div
              style={{ ...styles.card("active"), ...styles.cardSquare }}
              onMouseEnter={() => setHoveredCard("active")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={styles.label}>Active Users</span>
              <span style={styles.valueBig}>{usersData.length}</span>
            </div>
          </div>

          {/* Middle Row: Last Login */}
          <div
            style={{ ...styles.card("login"), ...styles.cardWide }}
            onMouseEnter={() => setHoveredCard("login")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span style={styles.label}>Last Login(Static value)</span>
            <span style={styles.valueText}>
              Admin — Today, <span style={styles.highlight}>10:42</span> AM
            </span>
          </div>

          {/* Bottom Row: System Status */}
          <div
            style={{ ...styles.card("status"), ...styles.cardWide }}
            onMouseEnter={() => setHoveredCard("status")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span style={styles.label}>System Status</span>
            <div style={styles.statusRow}>
              <div style={styles.dot}></div>
              <span style={styles.valueText}>Running normally</span>
            </div>
          </div>

          {/* DECORATIVE: The Schematic Lines on the Right */}
          <div style={styles.treeContainer}>
            {/* Dashes corresponding to rows */}
            <div style={{ ...styles.horizontalLine, top: "60px" }}></div>
            <div style={{ ...styles.horizontalLine, top: "190px" }}></div>
            <div style={{ ...styles.horizontalLine, top: "300px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
