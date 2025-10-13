import './App.css'; 
import { useState } from "react";
import NavbarExample from "./NavbarExample"; // Your custom navbar
import { LoginPage } from "./UseActionExample";
import Users from "./DerivedState";
import { Link, Route, Routes } from "react-router";
import { UserData } from "./UserData";
import { AddUser } from "./AddUser";
import { Nav } from "react-bootstrap";
// You can add more component imports as needed

function App() {
  const [user, setUser] = useState('');

  return (
    <>
      <NavbarExample />
      <div className="nav-links">
  <ul>
    <li>
      <Nav.Link as={Link} to="/userdata">UserList</Nav.Link>
    </li>
    <li>
      <Nav.Link as={Link} to="/adduser">Add User</Nav.Link>
    </li>
  </ul>
</div>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
        
      </div>
    </>
  ); 
}

export default App;
