import React, { useState } from "react";

const Login_page = ({ adminCreds, setAuthenticated }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#0d0d0d",
      fontFamily: '"Courier New", Courier, monospace',
      color: "#c0c0c0",
    },
    card: {
      border: "2px solid #555",
      padding: "60px 50px",
      width: "100%",
      maxWidth: "500px",
      textAlign: "center",
      position: "relative",
    },
    headerGroup: {
      marginBottom: "50px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "normal",
      marginBottom: "8px",
      letterSpacing: "1px",
      color: "#e0e0e0",
    },
    subtitle: {
      fontSize: "16px",
      color: "#888",
      margin: 0,
    },
    inputGroup: {
      marginBottom: "35px",
      display: "flex",
      flexDirection: "column",
    },
    input: {
      backgroundColor: "transparent",
      border: "2px solid #666",
      padding: "15px",
      color: "#fff",
      fontFamily: "inherit",
      fontSize: "16px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
    },
    buttonContainer: {
      marginTop: "40px",
      marginBottom: "50px",
      display: "flex",
      justifyContent: "center",
      gap: "5px",
      alignItems: "center",
      padding: "0 40px",
    },
    button: {
      background: "none",
      border: "none",
      color: "#c0c0c0",
      fontFamily: "inherit",
      fontSize: "18px",
      cursor: "pointer",
      padding: "0 10px",
    },
    bracket: {
      fontSize: "18px",
      color: "#c0c0c0",
    },
    footer: {
      fontSize: "14px",
      color: "#666",
      marginTop: "20px",
    },
  };

  const [Id, setId] = useState("");
  const [pass, setpass] = useState("");

  const Verify = () => {
    if (Id === adminCreds.id && pass === adminCreds.password) {
      setAuthenticated(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.headerGroup}>
          <h1 style={styles.title}>Admin Portal</h1>
          <p style={styles.subtitle}>Secure access to admin system</p>
        </div>


        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            value={Id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>


        <div style={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={pass}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => setpass(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Verify();
                setId("");
                setpass("");
              }
            }}
          />
        </div>


        <div style={styles.buttonContainer}>
          <span style={styles.bracket}>[</span>
          <button
            style={styles.button}
            onClick={() => {
              Verify();
              setId("");
              setpass("");
            }}
          >
            Sign In
          </button>
          <span style={styles.bracket}>]</span>
        </div>


        <div style={styles.footer}>&copy; Admin Management System</div>
      </div>
    </div>
  );
};

export default Login_page;
