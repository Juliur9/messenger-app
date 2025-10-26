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
    <div className="register-container">
      <h1>Hier kannst du dich registrieren</h1>
      <form onSubmit={handelregister}>
        <p>{status}</p>
        <label htmlFor="username">Benutzername:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Passwort:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default Register;
