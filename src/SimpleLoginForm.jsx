import React, { useState } from "react";

function SimpleLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:{" "}
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleLoginForm;
