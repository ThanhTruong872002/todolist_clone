import React, { useEffect, useState } from "react";
import "./style.css";
import Todo from "../Todo";

export default function Content() {
  return (
    <div className="content">
      <div className="content__wrap">
        <div className="content__list"></div>
      </div>
    </div>
  );
}
