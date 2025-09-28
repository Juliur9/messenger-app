import { useState } from "react";

function LoginRegister({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginRegister() {
    if (!email || !password) {
      alert("Bitte fülle alle Felder aus.");
      return;
    }
    //andere Validierung

    // Hier kommt die Login/Register Logik hin
    console.log("Email:", email);
    console.log("Password:", password);

    //Check ob Emails bereits registriert ist
    //Wenn ja -> Login
    //Wenn nein -> Register

    //Localstorage.setItem("user", JSON.stringify(userdata)); halt alle userdata z.B. userId, token, etc.

    //Nach erfolgreichem Login/Register weiterleiten zur Messenger Komponente
    //onLoginSuccess(userdata);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl">Login / Register</h1>

      <div className="w-3xl flex flex-col">
        <input className="m-1 mt-10 h-16 w-full rounded-2xl bg-slate-100 p-2" type="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="m-1 mb-3 h-16 w-full rounded-2xl bg-slate-100 p-2" type={"password"} placeholder="Enter password ..." value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <button onClick={handleLoginRegister} className="m-1 h-16 w-full rounded-2xl bg-slate-200 p-1">
          Login / Register
        </button>
      </div>
    </div>
  );
}

export default LoginRegister;
