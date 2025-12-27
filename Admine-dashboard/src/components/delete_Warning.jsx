import { useState } from "react";

const DelWarning = ({ setDelWar, DeleteData, dataId }) => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const styles = {
    // 1. OVERLAY: Apple-style Blur & Centering
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,

      // Flexbox Centering
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      // Frosted Background
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    },

    // 2. BOX: Exact Original Styling + Responsive Width
    box: {
      position: "relative",

      // Responsive constraints
      width: "100%",
      maxWidth: "420px",
      margin: "0 20px",

      // Visuals
      backgroundColor: "rgba(20, 20, 20, 0.9)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",

      fontFamily: '"Courier Prime", "Courier New", monospace',
      color: "#c0c0c0",

      border: "1px solid #333",
      borderRadius: "8px",

      padding: "25px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      userSelect: "none",
    },

    // Header
    header: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#e0e0e0",
      textTransform: "uppercase",
      letterSpacing: "2px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      borderBottom: "1px solid #333",
      paddingBottom: "15px",
    },

    // Message
    message: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#999",
    },

    // Buttons Container
    buttonRow: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "25px",
      marginTop: "10px",
    },

    // Text Button Style
    textBtn: {
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "color 0.2s ease",
      letterSpacing: "1px",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        {/* Header */}
        <div style={styles.header}>
          <span>⚠️</span>
          <span>Confirm Delete</span>
        </div>

        {/* Message */}
        <div style={styles.message}>
          Are you sure you want to delete this task?
          <br />
          This action cannot be undone.
        </div>

        {/* Buttons */}
        <div style={styles.buttonRow}>
          {/* Cancel */}
          <div
            style={{
              ...styles.textBtn,
              color: hoveredBtn === "cancel" ? "#fff" : "#888",
            }}
            onMouseEnter={() => setHoveredBtn("cancel")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => {
              setDelWar(false);
            }}
          >
            [ Cancel ]
          </div>

          {/* Delete */}
          <div
            style={{
              ...styles.textBtn,
              color: hoveredBtn === "delete" ? "#ff4444" : "#666",
            }}
            onMouseEnter={() => setHoveredBtn("delete")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => {
              DeleteData(dataId);
              console.log("deleted" + dataId);
              setDelWar(false);
            }}
          >
            [ Delete ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelWarning;
