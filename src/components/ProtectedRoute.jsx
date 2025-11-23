import { useEffect, useState } from "react";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("https://messengerapp-backend.onrender.com/api/auth/auth", { withCredentials: true });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("User ist nicht eingeloggt, weiterleitung zur Login Seite");
        } else {
          console.log("Fehler bei der Authentifizierungsprüfung:", error);
        }
        setIsAuthenticated(false);
        window.location = "/login";
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  return children;
}
