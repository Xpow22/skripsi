import React from "react";
import styles from "../src/styles/molechules.css";

function App() {
  return (
    <div>
      <h1 className="titlelogin" style={styles.titlelogin}>
        APLIKASI BANJIR DISKA KONTOL
      </h1>
      <div className="cardlogin" style={styles.cardlogin}>
        <p className="titlecard">Username</p>
        <input type={"email"} className="inplogin" />
        <p className="titlecard">Password</p>
        <input type={"password"} className="inplogin" />
        <button className="buttonlogin">Masuk</button>
      </div>
    </div>
  );
}

export default App;
