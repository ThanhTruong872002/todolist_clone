import React, { useEffect } from "react";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__menu-item">
          <div>All Task</div>
          <div>New Task</div>
          <div>Doing Task</div>
          <div>Done Task</div>
        </div>
      </div>
    </div>
  );
}
