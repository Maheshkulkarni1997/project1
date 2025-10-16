import './UserData.css';  // Your CSS for the table
import React, { } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export function UserData({ userData, url, setUserData, onEditUser }) {
    const deleteUser = async (id) => {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Record Deleted...");
            setUserData((prevUsers) => prevUsers.filter((user) => user.id !== id));
        } else {
            alert("Failed to delete record.");
        }
    };

    const editUser = (user) => {
        onEditUser(user); // Notify parent to switch to edit mode
    };

    return (
        <Container fluid="md" className="mt-4">
            <Row>
                <Col>
                    <h1>User List</h1>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map(user => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.middleName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button onClick={() => deleteUser(user.id)} variant="danger" className="me-2">Delete</Button>
                                        <Button onClick={() => editUser(user)} variant="success">Edit</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}
