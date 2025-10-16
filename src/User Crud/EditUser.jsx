import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";
import { useParams } from "react-router";

export function EditUser() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    

    const {id}=useParams();
    const url = "http://localhost:3000/users/"+id;
    useEffect(()=>{
        getUserData();
    },[]);

   const getUserData = async ()=>{
  
   let  response = await fetch(url);
   response = await response.json();
   
   setFirstName(response.firstName);
   setMiddleName(response.middleName);
   setLastName(response.lastName);
   setEmail(response.email)

   console.log(response);

   }
   
   const updateUser = async () => {

        let response = await fetch(url, {
            method: "Put",
            body: JSON.stringify({ firstName, middleName, lastName, email })
        });
        response = await response.json();
        if (response) {
            alert("User Updated Successfully!");
          } else {
            alert("Failed to update user");
          }
    }

    return (
        <div>
            <h1>Edit User</h1>

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

            <Button variant="primary" onClick={() => updateUser(id)}>
                Update User
            </Button>
        </div>
    );
}
