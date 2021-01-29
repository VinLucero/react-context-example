import React, { createContext, useState, useEffect } from "react";
import Card from "./Card";
import Login from "./Login";
import "./styles.css";

export const AuthContext = createContext();

export default function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(`The token is ${token}`);
  });
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <div className="App">
        <div className="header">
          <h1>Learning React Context</h1>
          <p>
            This will help me understand how state travels from components to
            component
          </p>
        </div>
        <Login />
        <Card />
      </div>
    </AuthContext.Provider>
  );
}
