import React from "react";

export default function Reorder(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}