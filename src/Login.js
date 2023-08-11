import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleEmailLogin}>Login</button>
      </div>
      <br />
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
