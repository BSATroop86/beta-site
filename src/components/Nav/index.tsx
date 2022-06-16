import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./logo.png";

const Links = [
  { name: "Home", to: "/" },
  { name: "Calendar Page", to: "/calendar" },
  { name: "New Scouts", to: "./newScoutResources" },
  { name: "Eagles", to: "./eagles" },
  { name: "Eagle Resources", to: "./eagleResources" },
  { name: "Summer Camp", to: "./summerCamp" },
  { name: "Training", to: "./training" },
  { name: "About", to: "./about" },
  { name: "Contact", to: "./contact" },
];

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
          {Links.map(({ to, name }) => (
            <NavLink to={to}>{name}</NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
