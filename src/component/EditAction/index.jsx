import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";

export default function Action({
  status,
  setFormData,
  formData,
  editTodoId,
  setStatus,
}) {
  const handleRadioChange = (event) => {
    setFormData((prev) => ({ ...prev, status: event.target.value }));
  };

  const handleSummit = async () => {
    const res = await axios.put(
      `https://6486a69cbeba6297278f00b8.mockapi.io/todolist/${editTodoId}`,
      formData
    );
    if (res.data === 200) {
      setStatus("home");
    }
  };

  const handleDelete = async () => {
    const res = await axios.delete(
      `https://6486a69cbeba6297278f00b8.mockapi.io/todolist/${editTodoId}`
    );
    if (res.status === 200) {
      setStatus("home");
    }
  };
  const handleReset = () => {
    setFormData({
      title: "",
      creator: "",
      status: "new",
      created_at: new Date(),
      desc: "",
    });
  };
  return (
    <>
      <form>
        <div className="edit-radio">
          <label className="lable-item">
            <input
              type="radio"
              name="status"
              id=""
              value="new"
              className="radio-css"
              checked={status === "new"}
              onChange={handleRadioChange}
            />
            New
          </label>
          <label className="lable-item">
            <input
              type="radio"
              name="status"
              id=""
              value="doing"
              className="radio-css"
              checked={status === "doing"}
              onChange={handleRadioChange}
            />
            Doing
          </label>
          <label className="lable-item">
            <input
              type="radio"
              name="status"
              id=""
              value="done"
              className="radio-css"
              checked={status === "done"}
              onChange={handleRadioChange}
            />
            Done
          </label>
        </div>
      </form>
      <div className="action-btn">
        <button className="btn-save" onClick={handleSummit}>
          Save
        </button>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn-delete" onClick={handleDelete} type="button">
          Delete
        </button>
      </div>
    </>
  );
}
