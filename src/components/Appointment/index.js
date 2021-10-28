import React from "react";
import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  // const apptMessage = (time) => {
  //   if (!time) {
  //     return "No appointments"
  //   } else {
  //     return `Appointment at ${props.time}`
  //   }
  // }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/> : <Empty/>}
      {/* {apptMessage(props.time)} */}
    </article>
  );
}