import React, { useState } from "react";
import API from "../api";

function Appointment() {
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");

  const bookAppointment = async () => {
    await API.post("/appointments/", {
      doctor_id: Number(doctorId),
      patient_id: Number(patientId),
      status: "Scheduled",
    });

    alert("Appointment Booked");
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input
        placeholder="Doctor ID"
        onChange={(e) => setDoctorId(e.target.value)}
      />
      <input
        placeholder="Patient ID"
        onChange={(e) => setPatientId(e.target.value)}
      />

      <button onClick={bookAppointment}>Book</button>
    </div>
  );
}

export default Appointment;