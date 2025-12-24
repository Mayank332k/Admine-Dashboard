import React, { useState } from "react";

const Setting = ({ adminCreds, setAdminCreds, setActiveTab }) => {
  // Visual States Only (for button animations)
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Local editable state (form state)
  const [id, newId] = useState(adminCreds.id);
  const [pass, newPass] = useState(adminCreds.password);

  return (
    <div style={styles.screen}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');
          
          .retro-input::placeholder {
            color: #333;
            opacity: 1;
          }
          .retro-input:focus {
            outline: none;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: #050505;
          }
        `}
      </style>

      {/* Main Container */}
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>S E T T I N G S</h1>
          <div style={styles.line}></div>
        </div>

        {/* FORM CONTENT */}
        <div style={styles.formContent}>
          <h2 style={styles.sectionTitle}>Admin Credentials</h2>

          {/* Admin ID Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Admin ID</label>
            <div style={styles.bracketRow}>
              <span style={styles.bracket}>[</span>
              <input
                type="text"
                placeholder="Enter new admin email"
                style={styles.input}
                className="retro-input"
                value={id}
                onChange={(e) => {
                  newId(e.target.value);
                }}
              />
              <span style={styles.bracket}>]</span>
            </div>
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.bracketRow}>
              <span style={styles.bracket}>[</span>
              <input
                type="password"
                placeholder="Enter new password"
                style={styles.input}
                className="retro-input"
                value={pass}
                onChange={(e) => {
                  newPass(e.target.value);
                }}
              />
              <span style={styles.bracket}>]</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={styles.line}></div>
          <button
            style={{
              ...styles.saveButton,
              ...(isHovered ? styles.saveButtonHover : {}),
              ...(isActive ? styles.saveButtonActive : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsActive(false);
            }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onClick={() => {
              setAdminCreds({
                id,
                password: pass,
              });

              setActiveTab("Dashboard");
            }}
          >
            Save Changes
          </button>
          <div style={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

// Styles (UNCHANGED)
const styles = {
  screen: {
    backgroundColor: "#050505",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: '"Courier Prime", monospace',
    boxSizing: "border-box",
    overflow: "hidden",
  },
  container: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  title: {
    color: "#666",
    fontSize: "14px",
    margin: 0,
    letterSpacing: "6px",
    fontWeight: "normal",
  },
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "#222",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    color: "#888",
    fontSize: "14px",
  },
  bracketRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#777",
    fontSize: "16px",
  },
  bracket: {
    fontWeight: "bold",
    userSelect: "none",
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    color: "#fff",
    fontFamily: "inherit",
    fontSize: "14px",
    margin: "0 15px",
    letterSpacing: "1px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  saveButton: {
    width: "100%",
    padding: "20px 0",
    backgroundColor: "transparent",
    borderLeft: "1px solid #1a1a1a",
    borderRight: "1px solid #1a1a1a",
    borderTop: "none",
    borderBottom: "none",
    color: "#aaa",
    fontSize: "14px",
    letterSpacing: "2px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.1s ease",
    outline: "none",
  },
  saveButtonHover: {
    color: "#fff",
    borderLeft: "1px solid #333",
    borderRight: "1px solid #333",
  },
  saveButtonActive: {
    color: "#888",
    transform: "scale(0.98)",
    borderLeft: "1px solid #111",
    borderRight: "1px solid #111",
  },
};

export default Setting;
