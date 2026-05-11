import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    alert("Account Created Successfully 🚀");
  };

  return (
    <div style={styles.container}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>Create Account ✨</h1>
        <p style={styles.subtitle}>
    
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleSignup} style={styles.button}>
          Sign Up
        </button>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/">
          <span style={styles.login}>Login</span></Link>
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
      "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6dd5ed 100%)",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },

  glow1: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    top: "-80px",
    left: "-80px",
    filter: "blur(70px)",
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(0,255,255,0.2)",
    borderRadius: "50%",
    bottom: "-80px",
    right: "-80px",
    filter: "blur(70px)",
  },

  card: {
    width: "380px",
    padding: "40px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.18)",
    textAlign: "center",
    color: "white",
    zIndex: 2,
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "30px",
    color: "#e0e0e0",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    background: "rgba(255,255,255,0.18)",
    color: "white",
    backdropFilter: "blur(10px)",
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(to right, #00f260, #0575e6)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },

  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#f1f1f1",
  },

  login: {
    color: "#00ffff",
    fontWeight: "bold",
    cursor: "pointer",
    
  },
};

export default Signup;