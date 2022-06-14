import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./logo.png";

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => <Nav.Link href={to}>{children}</Nav.Link>;

export const T86Nav = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} height="30" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
