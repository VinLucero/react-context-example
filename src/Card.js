import React from "react";
import "./styles.css";
import { AuthContext } from "./App";

export default function Card() {
  const { token } = React.useContext(AuthContext);

  if (token !== "love") {
    return (
      <div className="Card">
        <h3>Locked message</h3>
      </div>
    );
  }
  return (
    <div className="Card">
      <h3>From Lu</h3>
      <p>True love never dies.</p>
    </div>
  );
}
