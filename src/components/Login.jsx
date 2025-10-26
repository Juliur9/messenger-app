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

        if(error) {
            console.error("Login-Fehler", error);
            setStatus("❌ " + error.message);
            return;
        }

       console.log("Login erfolgreich", data);
       setStatus("✅ Erfolgreich eingeloggt!");
       window.location = "/Home";
};

return(
    <div class="login-container">
        <h1>Login</h1>

        <form onSubmit={handlelogin}>
            <p>{status}</p>

            <label htmlFor="email">E-Mail:</label>
            <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for htmlFor="password">Passwort:</label>
            <input id="password" type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            </form>
            
    </div>
);
};

export default Login;