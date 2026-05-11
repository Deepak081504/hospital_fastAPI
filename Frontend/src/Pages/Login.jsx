// import React, { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");

//   const handleLogin = () => {
//     alert("Logged in as " + username);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         placeholder="Enter name"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    alert("Logged in as " + username);
  };
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>DS</h1>
        <p style={styles.subtitle}> HOSPITALS</p>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <p style={styles.footerText}>
          Don’t have an account?{" "}

          <Link to="/signup"><span style={styles.signup}>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%)",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },

  overlay: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    top: "-100px",
    left: "-100px",
    filter: "blur(50px)",
  },

  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "25px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.2)",
    textAlign: "center",
    color: "white",
    zIndex: 2,
    animation: "fadeIn 1s ease",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "30px",
    color: "#f1f1f1",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    backdropFilter: "blur(10px)",
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: "0 4px 15px rgba(0,114,255,0.4)",
  },

  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#f1f1f1",
  },

  signup: {
    color: "#00e0ff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;