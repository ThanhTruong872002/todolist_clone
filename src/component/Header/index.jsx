import React from "react";
import "./style.css";
import { useState } from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <button className="create-btn">
            <span>Create New Task</span>
          </button>
          <div className="header-search">
            <input
              type="text"
              className="input-search"
              id="input-search"
              placeholder="Type something to search"
            />
            <button className="search">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
}
