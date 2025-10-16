import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

export function AddUser({ user, setActiveTab, setEditingUser }) {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const url = "http://localhost:3000/users";

    // Load user data into form when editing
    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setMiddleName(user.middleName || '');
            setLastName(user.lastName || '');
            setEmail(user.email || '');
        } else {
            setFirstName('');
            setMiddleName('');
            setLastName('');
            setEmail('');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { firstName, middleName, lastName, email };

        try {
            const response = await fetch(
                user ? `${url}/${user.id}` : url,
                {
                    method: user ? "PUT" : "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            if (response.ok) {
                alert(user ? "User Updated Successfully!" : "User Added Successfully!");

                // Go back to user list
                setActiveTab("userList");
                setEditingUser(null);
            } else {
                alert("Failed to submit data");
                console.log(result);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };

    return (
        <Container>
            <h2 className="text-center">{user ? "Edit User" : "Add User"}</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter Middle Name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {user ? "Update User" : "Add User"}
                </Button>
            </Form>
        </Container>
    );
}
