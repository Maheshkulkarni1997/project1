import { use, useEffect, useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>count {count}</h3>
            <button onClick={() => setCount(count + 1)}>count++</button>
            <button onClick={() => setCount(0)}>resetCount</button>
        </div>
    )
}

export function ChangeProfile() {

    const [user, setUser] = useState({ name: "abc", age: 20 })

    const changeName = () => {
        setUser({ ...user, name: "xyz" });
    };

    return (
        <div>
            <p>name={user.name} age ={user.age}</p>
            <button onClick={changeName}>Change Name</button>
        </div>

    )
}




export function Joke() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(data => setJoke(data.value));
    }, []);

    return <p>{joke || "Loading..."}</p>;
}




export function UserData() {
    const [users, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    if (!users) return <p>Loading...</p>;
    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.address.street}, {user.address.suite},<br />
                            {user.address.city}, {user.address.zipcode}
                        </td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

