import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";

export function AddUser() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const createUser = async () => {

        const url = "http://localhost:3000/users";
        const response = await fetch(url, {
            method: "Post",
            body: JSON.stringify({ firstName, middleName, lastName, email })
        });
        const data = await response.json();
        if (response.ok) {
            alert("User Added Successfully!");
          } else {
            alert("Failed to add user");
          }
    }

    return (
        <div>
            <h1>Add User</h1>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMiddleName">
                <Form.Control
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={() => createUser()}>
                Add User
            </Button>
        </div>
    );
}
