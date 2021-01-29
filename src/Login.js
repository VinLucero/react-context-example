import React, { useState, useContext } from "react";
import { AuthContext } from "./App";
import "./styles.css";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("pressing");
    setToken(input);
  };

  return (
    <div className="Login">
      <p>Enter passcode to continue</p>
      <form style={loginstyles}>
        {/* <h5>Enter passcode to continue</h5> */}
        <input
          placeholder="Passcode"
          type="password"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit" onClick={handleSumbit}>
          Enter
        </button>
      </form>
    </div>
  );
}

const loginstyles = {
  display: "flex"
};
