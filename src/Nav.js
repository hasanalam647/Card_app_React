import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navcontainer = ({ handleShow, category, setCategory}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><h4>// Sentinel-Mart //</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title={category || "Category"} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setCategory('Mobile phones')}>Mobile phones</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory('Electronics')}>Electronics</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory('furnitures')}>furnitures</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCategory('Mobile accessories')}>Mobile accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setCategory('')}>All items</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="ms-auto" onClick={handleShow}><FontAwesomeIcon style={{ height: "25px", width: "30px" }} icon={faCartShopping} />Cart</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcontainer;