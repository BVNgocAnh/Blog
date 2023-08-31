import React from "react";
import "./write.css";
export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://i.pinimg.com/564x/13/5f/7e/135f7e0ae46bfa10f894b822892bc392.jpg"
        alt=""
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
