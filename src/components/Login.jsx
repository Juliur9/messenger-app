import axios from "axios";
import { useState } from "react";
import PublicNavbar from "./publicNavbar";
import Snow from "./Snow";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      await axios.post("https://messengerapp-backend.onrender.com/api/auth/login", data, { withCredentials: true });
      setStatus("✅ Login erfolgreich!");
      window.location = "/messenger";
    } catch (error) {
      setStatus("❌ Login fehlgeschlagen!");
      console.log(error);
    }
  };

  return (
    <>
    <PublicNavbar />
    <div className="flex m-40 flex-col items-center justify-center">
      <Snow />
      <h1 className="mb-8 text-3xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">Login</h1>

      <form className="flex w-80 flex-col" onSubmit={handlelogin}>
        <p>{status}</p>

        <label htmlFor="email">E-Mail:</label>
        <input className="m-1 mb-5 h-14 w-full rounded-2xl bg-slate-100 p-2" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Passwort: </label>
        <input className="m-1 mb-5 h-14 w-full rounded-2xl bg-slate-100 p-2" id="password" type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="m-1 h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
