import React, { useState } from "react";
import Login from "./Login"; // Make sure the import path is correct
import Timer from "./Timer";

function App() {
  const [user, setUser] = useState(null); // Track the authenticated user

  return <div>{user ? <Timer /> : <Login setUser={setUser} />}</div>;
}

export default App;
