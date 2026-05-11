import React, { useEffect, useState } from "react";
import API from "../api";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const fetchPatients = async () => {
    const res = await API.get("/patients/");
    setPatients(res.data);
  };

  const addPatient = async () => {
    await API.post("/patients/", { name });
    fetchPatients();
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patients</h2>

      <input
        placeholder="Patient name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addPatient}>Add</button>

      {patients.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default Patients;