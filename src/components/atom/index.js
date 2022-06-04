import React from "react";
import styles from "../../styles/molechules.css";

const LoginUi = () => {
  return (
    <div>
    <div className="myImage"> </div>
      <h1 className="titlelogin" style={styles.titlelogin}>
        SIMOBA
      </h1>
      <p>Sistem Monitoring Banjir.</p>
      <div className="cardlogin" style={styles.cardlogin}>
        <p className="titlecard">Username</p>
        <input type={"email"} className="inplogin" />
        <p className="titlecard">Password</p>
        <input type={"password"} className="inplogin" />
        <button className="buttonlogin">Masuk</button>
      </div>
    </div>
  );
};

export default LoginUi;
