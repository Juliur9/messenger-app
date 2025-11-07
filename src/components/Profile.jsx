import axios from "axios";
import { LogOut, Undo2 } from "lucide-react";
import { useState } from "react";
import { useAuthCheck } from "./hooks/authCheck";

function Profile() {
  useAuthCheck();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [statusEmail, setStatusEmail] = useState("");
  const [statusPassword, setStatusPassword] = useState("");
  const [statusDelete, setStatusDelete] = useState("");

  const changeEmail = async (e) => {
    e.preventDefault();

    try {
      await axios.put("https://messengerapp-backend.onrender.com/api/account/email", { email }, { withCredentials: true } );
      console.log("E-Mail geändert");
      setStatusEmail("✅ E-Mail geändert");
      window.location = "/login";
    } catch (error) {
      console.log(error);
      setStatusEmail("❌ Fehlgeschlagen");
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();

    try {
      await axios.put("https://messengerapp-backend.onrender.com/api/account/password", { password }, { withCredentials: true });
      console.log("Passwort geändert");
      setStatusPassword("✅ Passwort geändert");
      window.location = "/login";
    } catch (error) {
      console.log(error);
      setStatusPassword("❌ Fehlgeschlagen");
    }
  };

  const deleteAccount = async (e) => {
    e.preventDefault();

    try {
      await axios.delete("https://messengerapp-backend.onrender.com/api/account/delete", { data: { passwordConfirm }, withCredentials: true });
      console.log("Account gelöscht");
      setStatusDelete("✅ Account gelöscht");
      window.location = "/";
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 403) {
        setStatusDelete("❌ Falsches Passwort");
        return;
      }
      setStatusDelete("❌ Fehlgeschlagen");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.delete("https://messengerapp-backend.onrender.com/api/auth/logout", { withCredentials: true });
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-start">
        <button onClick={() => (window.location = "/messenger")} title="Zurück zum Messenger">
          <Undo2 className="m-4 h-16 w-16 p-2" />
        </button>
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex w-80 flex-col">
            <h3 className="mb-2 mt-5 text-lg">Persöhnliche Daten ändern</h3>
            <form>
              <p>{statusEmail}</p>
              <label htmlFor="email">Neue E-Mail:</label>
              <input className="m-1 mb-1 h-14 w-full rounded-2xl bg-slate-100 p-2" id="email" type="email" placeholder="Neue E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />

              <button className="m-1 mb-5 h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit" onClick={changeEmail}>
                E-Mail ändern
              </button>
            </form>
            <form>
              <p>{statusPassword}</p>
              <label htmlFor="password">Neues Passwort: </label>
              <input className="m-1 mb-1 h-14 w-full rounded-2xl bg-slate-100 p-2" id="password" type="password" placeholder="Neues Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className="m-1 mb-5 h-14 w-full rounded-2xl bg-slate-200 p-1" type="submit" onClick={changePassword}>
                Passwort ändern
              </button>
            </form>
            <h3 className="mb-2 mt-5 text-lg">Account löschen</h3>
            <form>
              <p>{statusDelete}</p>
              <label htmlFor="passwordConfirm">Zum Überprüfen Passwort eingeben:</label>
              <input className="m-1 mb-1 h-14 w-full rounded-2xl bg-slate-100 p-2" id="passwordConfirm" type="password" placeholder="Passwort eingeben" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
              <button className="m-1 h-14 w-full rounded-2xl bg-slate-200 p-1" onClick={deleteAccount}>
                Account löschen
              </button>
            </form>
          </div>
        </div>
        <button onClick={logout} title="Ausloggen">
          <LogOut className="m-4 h-16 w-16 p-2" />
        </button>
      </div>
    </>
  );
}

export default Profile;
