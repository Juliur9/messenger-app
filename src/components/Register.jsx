import { use, useState } from "react";
import { supabase } from "./lib/supabaseClient";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handelregister = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: username }, //Metadata Anzeigename
      },
    });

    if (error) {
      console.error("Register-Fehler", error);
      setStatus("❌ " + error.message);
      return;
    }
    console.log("Register erfolgreich", data);
    setStatus("✅ Erfolgreich Registriert!");
    window.location = "/login";
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl">Register</h1>
      <form onSubmit={handelregister}>
        <p>{status}</p>
        <label htmlFor="username">Benutzername:</label>
        <input className="mb-4 mt-1 h-14 w-full rounded-2xl bg-slate-100 p-2" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input className="mb-4 mt-1 h-14 w-full rounded-2xl bg-slate-100 p-2" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Passwort:</label>
        <input className="mb-4 mt-1 h-14 w-full rounded-2xl bg-slate-100 p-2" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default Register;
