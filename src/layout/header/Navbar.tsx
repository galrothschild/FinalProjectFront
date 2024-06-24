import { Navbar, Tabs } from "flowbite-react";
import NavLink from "../../router/utils/NavLink";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
	const navigate = useNavigate();
	return (
<Navbar fluid rounded className="shadow-lg">
      <Navbar.Brand href="/">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="My Movies Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
	);
};

export default NavbarComponent;
