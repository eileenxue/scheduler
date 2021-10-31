import React from "react";
import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  // const apptMessage = (time) => {
  //   if (!time) {
  //     return "No appointments"
  //   } else {
  //     return `Appointment at ${props.time}`
  //   }
  // }

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
        />
      ) : (
        <Empty />
      )} */}
      {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
        />
      )}

    </article>
  );
}
