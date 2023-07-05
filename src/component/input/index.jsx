import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Action from "../EditAction";

export default function Input({ setStatus, editTodoId }) {
  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    status: "new",
    created_at: new Date(),
    desc: "",
  });

  const handleChangeFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);

  const handleSummit = () => {
    const res = axios.post(
      "https://6486a69cbeba6297278f00b8.mockapi.io/todolist",
      formData
    );
    setStatus("home");
  };

  const getDetailsId = async () => {
    const res = await axios.get(
      `https://6486a69cbeba6297278f00b8.mockapi.io/todolist/${editTodoId}`
    );

    if (res.data) {
      setFormData(res.data);
    }
  };
  useEffect(() => {
    if (editTodoId) {
      getDetailsId();
    }
  }, [editTodoId]);

  return (
    <form onSubmit={handleSummit}>
      <div className="input">
        <div className="input__wrap">
          <div className="title ">
            <label className="title-text font-size">Title</label>
            <input
              required
              value={formData.title}
              name="title"
              type="text"
              className="input__title"
              placeholder="Name of todo..."
              onChange={handleChangeFormData}
            />
          </div>
          <div className="creator ">
            <label className="creator-text font-size">Creator</label>
            <input
              required
              value={formData.creator}
              name="creator"
              type="text "
              className="input__creator"
              placeholder="Name of Creator"
              onChange={handleChangeFormData}
            />
          </div>
          <div className="created-at ">
            <label className="created-at-text font-size">Created at</label>
            <input
              required
              value={formData.created_at}
              name="created_at"
              type="text "
              className="input__created-at"
              placeholder="08-02-2021 07:45:20"
              onChange={handleChangeFormData}
            />
          </div>
          <div className="description ">
            <label className="description-text font-size">Description</label>
            <input
              required
              value={formData.desc}
              name="desc"
              type="text "
              className="input__Description"
              placeholder="Description Details"
              onChange={handleChangeFormData}
            />
          </div>
        </div>

        {/* <button className="btn-save">Save</button> */}
      </div>
      {!editTodoId ? (
       <div className="btn_css">
          <button className="btn-save" onClick={handleSummit}>
            Save
          </button>
       </div>
      ) : (
        <Action
          setFormData={setFormData}
          status={formData.status}
          editTodoId={editTodoId}
          formData={formData}
          setStatus={setStatus}
        />
      )}
    </form>
  );
}
