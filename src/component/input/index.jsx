import React from "react";
import "./style.css";

export default function Input() {
  return (
    <div className="input">
      <div className="input__wrap">
        <div className="title ">
          <label className="title-text font-size">Title</label>
          <input
            name="title"
            type="text "
            className="input__title"
            placeholder="Name of todo..."
          />
        </div>
        <div className="creator ">
          <label className="creator-text font-size">Creator</label>
          <input
            name="creator"
            type="text "
            className="input__creator"
            placeholder="Name of Creator"
          />
        </div>
        <div className="created-at ">
          <label className="created-at-text font-size">Created at</label>
          <input
            name="created_at"
            type="text "
            className="input__created-at"
            placeholder="08-02-2021 07:45:20"
          />
        </div>
        <div className="description ">
          <label className="description-text font-size">Description</label>
          <input
            name="desc"
            type="text "
            className="input__Description"
            placeholder="Description Details"
          />
        </div>
      </div>

      <button className="btn-save">Save</button>
    </div>
  );
}
