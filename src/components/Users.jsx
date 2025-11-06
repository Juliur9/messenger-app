import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchUsers = async () => {
        try{
           const res = await axios.get("https://messengerapp-backend.onrender.com/api/user", { withCredentials: true }) 
            setUsers(res.data);
        } catch (err) {
            setError('Fehler beim Laden der Daten')
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    fetchUsers();
}, []);



if(loading) return <p>Lade Benutzer...</p>;
if (error) return <p>{error}</p>;
if (users.length === 0) return <p>Es wurden keine Benutzer gefunden</p>


return(
    <div>
        {users.map((user, index) => (
            <div key={index}>
                <p>{user.username}</p>
            </div>
        ))}
    </div>
)
};

export default UserList;