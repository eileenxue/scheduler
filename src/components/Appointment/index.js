import React from "react";
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const apptMessage = (time) => {
    if (!time) {
      return "No appointments"
    } else {
      return `Appointment at ${props.time}`
    }
  }

  return (
    <article className="appointment">
      {apptMessage(props.time)}
    </article>
  );
}