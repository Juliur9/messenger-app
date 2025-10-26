import { useState } from "react";
import { supabase } from "./lib/supabaseClient.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login-Fehler", error);
      setStatus("❌ " + error.message);
      return;
    }

    console.log("Login erfolgreich", data);
    setStatus("✅ Erfolgreich eingeloggt!");
    window.location = "/Home";
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center" class="login-container">
      <h1 className="mb-8 text-3xl">Login</h1>

      <form className="w-3xl flex flex-col" onSubmit={handlelogin}>
        <p>{status}</p>

        <label className="py-1" htmlFor="email">
          E-Mail:
        </label>
        <input className="m-1 mb-5 h-16 w-full rounded-2xl bg-slate-100 p-2" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="p-1" htmlFor="password">
          Passwort:{" "}
        </label>
        <input className="m-1 mb-5 h-16 w-full rounded-2xl bg-slate-100 p-2" id="password" type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="m-1 h-16 w-full rounded-2xl bg-slate-200 p-1" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
