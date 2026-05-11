import React, { useEffect, useState } from "react";
import API from "../api";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");

  const fetchDoctors = async () => {
    const res = await API.get("/doctors/");
    setDoctors(res.data);
  };

  const addDoctor = async () => {
    await API.post("/doctors/", { name });
    fetchDoctors();
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Doctors</h2>

      <input
        placeholder="Doctor name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addDoctor}>Add</button>

      {doctors.map((d) => (
        <p key={d.id}>{d.name}</p>
      ))}
    </div>
  );
}

export default Doctors;