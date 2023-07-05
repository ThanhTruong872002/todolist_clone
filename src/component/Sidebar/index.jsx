import React, { useEffect } from "react";
import "./style.css";

export default function Sidebar({ setStatusData, setStatus }) {
  const handleClickAllTask = (status) => {
    setStatusData(status);
    setStatus("home");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__menu-item">
          <div onClick={() => handleClickAllTask("all")}>All Task</div>
          <div onClick={() => handleClickAllTask("new")}>New Task</div>
          <div onClick={() => handleClickAllTask("doing")}>Doing Task</div>
          <div onClick={() => handleClickAllTask("done")}>Done Task</div>
        </div>
      </div>
    </div>
  );
}
