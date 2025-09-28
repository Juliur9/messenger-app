import { useState, useEffect } from "react";
import LoginRegister from "./components/LoginRegister.jsx";
import Messenger from "./components/Messenger.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return user ? <Messenger user={user} /> : <LoginRegister onLoginSuccess={setUser} />;
}

export default App;
