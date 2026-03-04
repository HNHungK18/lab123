import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useAuth } from '../customhooks/useAuth';

export default function OrchidNavbar({ setCurrentPage }) {
  const { user } = useAuth();
  return (
    <Navbar   className="mb-3">
    <Container>
        
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage("dashboard")}>Dashboard</Nav.Link>
            <Nav.Link disabled={!user} onClick={() => setCurrentPage("orchidList")}>Orchid List</Nav.Link>
            <Nav.Link disabled={!user} onClick={() => setCurrentPage("contact")}>Contact</Nav.Link>
          </Nav>
    </Container>
    </Navbar>
  );
}