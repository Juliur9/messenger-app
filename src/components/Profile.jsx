import axios from "axios";
import { Undo2 } from "lucide-react";
import { useState } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusUsername, setStatusUsername] = useState("");
  const [statusPassword, setStatusPassword] = useState("");

  const changeUsername = async (e) => {
    e.preventDefault();

    axios
      .put("https://messengerapp-backend.onrender.com/api/auth/email/change", { email: email }, { withCredentials: true })
      .then(function () {
        console.log("E-Mail geändert");
        setStatusUsername("✅ E-Mail geändert");
        window.location = "/login";
      })
      .catch(function (error) {
        console.log(error);
        setStatusPassword("❌ Fehlgeschlagen");
      });
  };

  const changePassword = async (e) => {
    e.preventDefault();

    axios
      .put("https://messengerapp-backend.onrender.com/api/auth/password/change", { password: password }, { withCredentials: true })
      .then(function () {
        console.log("Passwort geändert");
        setStatusPassword("✅ Passwort geändert");
        window.location = "/login";
      })
      .catch(function (error) {
        console.log(error);
        setStatusPassword("❌ Fehlgeschlagen");
      });
  };

  return (
    <>
      <div className="flex items-start">
        <button onClick={() => (window.location = "/messenger")}>
          <Undo2 className="m-4 h-16 w-16 p-2" />
        </button>
        <div className="flex h-screen w-11/12 items-center justify-center">
          <div className="flex w-80 flex-col">
            <form>
              <p>{statusUsername}</p>
              <label htmlFor="email">E-Mail:</label>
              <input className="m-1 mb-1 h-14 w-full rounded-2xl bg-slate-100 p-2" id="email" type="email" placeholder="Neue E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />

              <button className="m-1 mb-5 h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit" onClick={changeUsername}>
                E-Mail ändern
              </button>
            </form>
            <form>
              <p>{statusPassword}</p>
              <label htmlFor="password">Passwort: </label>
              <input className="m-1 mb-1 h-14 w-full rounded-2xl bg-slate-100 p-2" id="password" type="password" placeholder="Neues Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className="m-1 h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit" onClick={changePassword}>
                Passwort ändern
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
