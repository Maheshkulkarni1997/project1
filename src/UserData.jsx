import './UserData.css';  // Your CSS for the table
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert, Button } from 'react-bootstrap';

export function UserData() {
    const [userData, setUserData] = useState([]);
    const url = "http://localhost:3000/users";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        };

        fetchData();
    }, []);

    const deleteUser = async (id) => {
        const response = await fetch(`${url}/${id}`, {
          method: "DELETE"
        });
      
        if (response.ok) {
          alert("Record Deleted...");
      
          // Update state to remove the deleted user
          setUserData((prevUsers) => prevUsers.filter((user) => user.id !== id));
        } else {
          alert("Failed to delete record.");
        }
      };
      
    return (
        <Container fluid="md" className="mt-4">
            <Row>
                <Col>
                    <h1>Fetch User Data From API</h1>
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
                                    <Button onClick={()=>deleteUser(user.id)}variant="danger">Delete</Button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}
