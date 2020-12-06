import React, { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../../App";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import { useGoogleLogout } from "react-google-login";
import "./NavBar.css";

const clientId =
  "39435938639-2kvqil8o2l3sj1esmdldqrm9mrsnublm.apps.googleusercontent.com";

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [registerModalIsOpen, RegisterSetIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    alert("Logged out Successfully ✌");
    localStorage.clear("token");
    setLoggedInUser(false);
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Navbar className="shadow" bg="light" variant="light">
      <Navbar.Brand href="/home">BiyeKorun</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link
            style={{ color: "#8e8be6" }}
            className="brand-text ml-3"
            href="/home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "#8e8be6" }}
            className="brand-text ml-3"
            href="#"
          >
            Membership
          </Nav.Link>
          <Nav.Link
            style={{ color: "#8e8be6" }}
            className="brand-text ml-3"
            href="#"
          >
            Help
          </Nav.Link>
          {loggedInUser ? (
            <>
              <Nav.Link className="brand-text ml-3">
                Welcome, {loggedInUser.name}
              </Nav.Link>
              <Nav.Link
                onClick={signOut}
                style={{ color: "#8e8be6" }}
                className="brand-text ml-3"
                href="#"
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              {" "}
              <Nav.Link
                onClick={openModal}
                style={{ color: "#8e8be6" }}
                className="brand-text ml-3"
                href="#"
              >
                Login
              </Nav.Link>
              <Nav.Link
                onClick={openModal}
                style={{
                  backgroundColor: "#cf6ac6",
                  color: "white",
                  marginTop: "-8px",
                  paddingTop: "16px",
                  marginBottom: "-8px",
                  paddingBottom: "16px",
                }}
                // style={{ color: "#8e8be6" }}
                className="ml-3 "
                href="#"
              >
                Register
              </Nav.Link>{" "}
            </>
          )}
          <Login modalIsOpen={modalIsOpen} closeModal={closeModal}></Login>
          <Register
            registerModalIsOpen={registerModalIsOpen}
            closeModal={closeModal}
          ></Register>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;