import axios from "axios";
import { useEffect } from "react";

export function useAuthCheck() {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("https://messengerapp-backend.onrender.com/api/auth/auth", { withCredentials: true });

        if (response.status == 200) {
          console.log("User ist eingeloggt");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("User ist nicht eingeloggt, weiterleitung zur Login Seite");
        } else {
          console.log("Fehler bei der Authentifizierungsprüfung:", error);
        }
        window.location = "/login";
      }
    };

    checkAuth();
  }, []);
}
