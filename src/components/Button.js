import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {
  // FIRST WAY
  // let buttonClass = "button";
  // if (props.confirm) {
  //   buttonClass += " button--confirm";
  // } 
  // if (props.danger) {
  //   buttonClass += " button--danger";
  // }

  // BETTER WAY
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  })

  return <button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}