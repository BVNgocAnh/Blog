import React from "react";
import "./settings.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Accout</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              className="settingsImage"
              src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Viet Anh" />
          <label>Email</label>
          <input type="email" placeholder="vietanh@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
