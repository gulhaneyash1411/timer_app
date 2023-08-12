import React, { useState } from "react";
import Login from "./Login";
import Timer from "./Timer";

function App() {
  const [user, setUser] = useState(null); 

  return <div>{user ? <Timer /> : <Login setUser={setUser} />}</div>;
}

export default App;
