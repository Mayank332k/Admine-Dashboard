import React, { useState } from "react";

const AddUser = ({
  name,
  email,
  role,
  setName,
  setemail,
  setrole,
  AddData,
  usersData,
  setActiveTab,
}) => {
  const [isCancelHover, setIsCancelHover] = useState(false);
  const [isAddHover, setIsAddHover] = useState(false);

  // onaddclick handeler..
  const onClickhandeler = () => {
    AddData(name, email, role);
    setActiveTab("Users");
  };

  const styles = {
    // 1. Container & Layout
    container: {
      backgroundColor: "#0d0d0d",
      color: "#c0c0c0",
      fontFamily: '"Courier New", Courier, monospace',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      boxSizing: "border-box",
    },
    formWrapper: {
      width: "450px",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },

    // 2. Header
    header: {
      textAlign: "center",
      marginBottom: "10px",
    },
    title: {
      fontSize: "14px",
      color: "#aaa",
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "15px",
      display: "block",
      fontWeight: "bold",
    },
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "#333",
      border: "none",
    },

    // 3. Field Styling
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    label: {
      fontSize: "15px",
      color: "#aaa",
      letterSpacing: "1px",
      fontWeight: "bold",
    },

    // Input Containers
    inputContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
    },
    bracket: {
      color: "#777",
      fontWeight: "bold",
      fontSize: "18px",
    },
    input: {
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontFamily: "inherit",
      fontSize: "16px",
      outline: "none",
      width: "100%",
      letterSpacing: "1px",
      padding: "0 12px",
    },

    // 4. Role Dropdown
    selectWrapper: {
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    select: {
      appearance: "none",
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontFamily: "inherit",
      fontSize: "16px",
      outline: "none",
      width: "100%",
      letterSpacing: "1px",
      padding: "0 12px",
      cursor: "pointer",
    },
    customArrow: {
      position: "absolute",
      right: "10px",
      fontSize: "12px",
      color: "#e0e0e0",
      pointerEvents: "none",
    },

    // 5. Footer & Buttons
    footer: {
      marginTop: "30px",
    },
    buttonRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 20px",
    },
    btnBase: {
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.2s ease",
      letterSpacing: "1px",
      padding: "5px 10px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        {/* HEADER */}
        <div style={styles.header}>
          <span style={styles.title}>Add User</span>
          <hr style={styles.divider} />
        </div>

        {/* FIELD: Name */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Name</label>
          <div style={styles.inputContainer}>
            <span style={styles.bracket}>[</span>
            <input
              style={styles.input}
              type="text"
              placeholder="Enter full name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span style={styles.bracket}>]</span>
          </div>
        </div>

        {/* FIELD: Email */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email</label>
          <div style={styles.inputContainer}>
            <span style={styles.bracket}>[</span>
            <input
              style={styles.input}
              type="email"
              placeholder="Enter email address"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <span style={styles.bracket}>]</span>
          </div>
        </div>

        {/* FIELD: Role */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Role</label>
          <div style={styles.inputContainer}>
            <span style={styles.bracket}>[</span>
            <div style={styles.selectWrapper}>
              <select
                onChange={(e) => {
                  setrole(e.target.value);
                }}
                style={styles.select}
              >
                <option>User</option>
                <option>Admin</option>
                <option>Editor</option>
              </select>
              <span style={styles.customArrow}>▼</span>
            </div>
            <span style={styles.bracket}>]</span>
          </div>
        </div>

        {/* FIELD: Status (Read Only) */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Status</label>
          <div style={styles.inputContainer}>
            <span style={styles.bracket}>[</span>
            {/* FIXED: Removed duplicate style prop, merged styles properly */}
            <input
              type="text"
              value="Active"
              readOnly
              style={{
                ...styles.input,
                color: "#888",
                cursor: "default",
              }}
            />
            <span style={styles.bracket}>]</span>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <hr style={styles.divider} />

          <div style={{ ...styles.buttonRow, marginTop: "25px" }}>
            {/* CANCEL: Muted by default, Red on Hover */}
            <span
              style={{
                ...styles.btnBase,
                color: isCancelHover ? "#ff3333" : "#666",
              }}
              onMouseEnter={() => setIsCancelHover(true)}
              onMouseLeave={() => setIsCancelHover(false)}
              onClick={() => {
                setActiveTab("Users");
              }}
            >
              [ Cancel ]
            </span>

            <span
              style={{
                ...styles.btnBase,
                color: isAddHover ? "#ffcc00" : "#e0e0e0",
              }}
              onMouseEnter={() => setIsAddHover(true)}
              onMouseLeave={() => setIsAddHover(false)}
              onClick={() => {
                onClickhandeler();
              }}
            >
              [ Add User ]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
