import React, { useState, useEffect } from "react";

const Login_page = ({ adminCreds, setAuthenticated }) => {
  const [Id, setId] = useState("");
  const [pass, setpass] = useState("");

  const [isBlinking, setIsBlinking] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);

  const handleLogin = () => {
    if (!Id.trim() || !pass.trim()) {
      triggerError(true);
      return;
    }

    if (Id === adminCreds.id && pass === adminCreds.password) {
      setAuthenticated(true);
      setId("");
      setpass("");
    } else {
      triggerError(false);
      setAuthenticated(false);
    }
  };

  const triggerError = (showText) => {
    setIsBlinking(true);
    if (showText) setShowErrorText(true);

    setTimeout(() => {
      setIsBlinking(false);
      setShowErrorText(false);
    }, 1000);
  };

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
      fontFamily: '"Courier New", Courier, monospace',
    },

    card: {
      position: "relative",
      width: "100%",
      maxWidth: "420px",
      margin: "0 20px",

      backgroundColor: "rgba(10, 10, 10, 0.65)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",

      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "14px",
      padding: "50px 40px",
      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.8)",

      textAlign: "center",
      color: "#c0c0c0",
      display: "flex",
      flexDirection: "column",
    },

    headerGroup: {
      marginBottom: "40px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "normal",
      marginBottom: "8px",
      letterSpacing: "2px",
      color: "#ffffff",
      textTransform: "uppercase",
      textShadow: "0 0 10px rgba(255,255,255,0.1)",
    },
    subtitle: {
      fontSize: "12px",
      color: "#666",
      letterSpacing: "1px",
    },

    // Inputs
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    input: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "8px",
      padding: "16px",
      color: "#fff",
      fontFamily: "inherit",
      fontSize: "15px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color 0.3s ease",

      animation: isBlinking ? "blinkRed 0.2s ease-in-out 3" : "none",
    },

    errorText: {
      height: "20px",
      marginTop: "15px",
      color: "#ff4444",
      fontSize: "11px",
      fontWeight: "bold",
      letterSpacing: "1px",
      textTransform: "uppercase",

      opacity: showErrorText ? 1 : 0,
      transition: "opacity 0.2s ease",
      textShadow: "0 0 8px rgba(255, 68, 68, 0.4)",
    },

    buttonContainer: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      alignItems: "center",
    },
    button: {
      background: "none",
      border: "none",
      color: "#e0e0e0",
      fontFamily: "inherit",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      padding: "10px 20px",
      letterSpacing: "1px",
      transition: "all 0.2s",
    },
    bracket: {
      fontSize: "20px",
      color: "#555",
      fontWeight: "lighter",
    },
    footer: {
      fontSize: "11px",
      color: "#444",
      marginTop: "40px",
      letterSpacing: "1px",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes blinkRed {
            0%, 100% { border-color: rgba(255, 255, 255, 0.15); }
            50% { border-color: #ff3333; box-shadow: 0 0 10px rgba(255, 51, 51, 0.3); }
          }
          
          input::placeholder {
            color: #555;
          }
        `}
      </style>

      <div style={styles.card}>
        <div style={styles.headerGroup}>
          <h1 style={styles.title}>Admin Portal</h1>
          <p style={styles.subtitle}>// RESTRICTED AREA</p>
        </div>

        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Identity"
            style={styles.input}
            value={Id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Key"
            style={styles.input}
            value={pass}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => setpass(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          />
        </div>

        <div style={styles.errorText}>&gt; Error: Missing Credentials</div>

        <div style={styles.buttonContainer}>
          <span style={styles.bracket}>[</span>
          <button
            style={styles.button}
            onClick={handleLogin}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
          >
            LOGIN
          </button>
          <span style={styles.bracket}>]</span>
        </div>

        <div style={styles.footer}>SECURE SYSTEM v3.1</div>
      </div>
    </div>
  );
};

export default Login_page;
