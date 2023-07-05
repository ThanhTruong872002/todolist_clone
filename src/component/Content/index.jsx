import React, { useEffect, useState } from "react";
import "./style.css";
import Todo from "../Todo";

export default function Content({ listData, setStatus, setEditTodoId }) {
  return (
    <div className="content">
      <div className="content__wrap">
        <div className="content__list">
          {listData.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              setStatus={setStatus}
              setEditTodoId ={setEditTodoId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
