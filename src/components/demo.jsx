import React from "react";
import "./Demo.css"; //something wrong in external css
import styles from "./Style.module.css"; //something wrong
function demo() {
  const myStyle = { color: "green",backgroundColor:'orange', border: "2px solid green" };
  return (
    <div>
      <h2 style={{ color: "red", backgroundColor:'yellow', border: "2px solid red" }}>
        Demo component inline style
      </h2>
      <h2 style={myStyle}>Demo inline style with </h2>
      <h1 className="title">Demo component with external css style</h1>
      <h1 className={styles.heading}>Demo component with modular css</h1>

      <p> I have practice css</p>
    </div>
  );
}

export default demo;
