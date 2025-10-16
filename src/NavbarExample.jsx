import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';


function NavbarExample() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link as={Link} to="/loginpage">Login</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/addusers">Add User</Nav.Link>
              <Nav.Link as={Link} to="/userdata">UserData</Nav.Link> */}
              <Nav.Link as={Link} to="/user-link">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  

export default NavbarExample;