import { useState } from "react"

export default function Users() {

    //this useStatus for store value inside array
    const [users, setUsers] = useState([]);

    //this is for input values 
    const [user, setUser] = useState('');


    const handleAddUsers = () => {
        setUsers([...users, user])
    }
    const total = users.length;
    const lastUser = users[users.length - 1]
    const uniqueUsers = [...new Set(users)].length;

    return (

        <div>
            <h4>Total User = {total}</h4>
            <h4>Last User = {lastUser}</h4>
            <h4>Unique User = {uniqueUsers}</h4>

        
            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="Add New User" />
            <button onClick={handleAddUsers}>Add User</button>
            <button onClick={() => setUsers([])}>Clear Users</button>
            {
                users.map((item, index) =>
                    <h4 key={index} > {item}</h4>
                )
            }


        </div>
    )
}