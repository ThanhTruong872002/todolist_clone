import React, { useState } from "react";

export default function Todo({ todo, setStatus, setEditTodoId }) {
  // const [colorStatus, setColorStatus] = useState("#04BE00");
  let color = "#04BE00";
  const handleColor = (status) => {
    if (status === "doing") {
      // setColorStatus('blue')
      return "#F88F14";
    } else if (status === "done") {
      return "#675BF1";
    }
    return color;
  };

  return (
    <div
      className="content__list-item"
      onClick={() => {
        setStatus("creator");
        setEditTodoId(todo.id);
      }}
    >
      <h4 className="title">Title: {todo.title}</h4>
      <p className="creator">Creator: {todo.creator}</p>
      <p className="status " style={{ color: handleColor(todo.status) }}>
        Status: {todo.status}
      </p>
      <p className="desscription">
        <br />
        <p className="desc">desc: {todo.de}</p>
      </p>
    </div>
  );
}
