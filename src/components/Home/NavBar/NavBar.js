import React, { useContext, useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../../App";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import { useGoogleLogout } from "react-google-login";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LogOut from "../../Authentication/LogOut/LogOut";

const clientId =
  "39435938639-2kvqil8o2l3sj1esmdldqrm9mrsnublm.apps.googleusercontent.com";

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [registerModalIsOpen, RegisterSetIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const profileData = useSelector((state) => state.profile);

  // useEffect(() => {
  //   const hasToken = sessionStorage.getItem("Token");
  //   if (hasToken) {
  //     setLoggedInUser(true);
  //   } else {
  //     setLoggedInUser(false);
  //   }
  // }, [setLoggedInUser]);

  // const onLogoutSuccess = (res) => {
  //   //console.log("Logged out Success");

  //   // toast.success("Logged out Successfully ✌");
  //   // sessionStorage.clear("token");
  //   sessionStorage.clear("token");
  //   toast.success("Logged out Successfully ✌");
  //   setLoggedInUser(false);
  // };

  // const onFailure = () => {
  //   ("Handle failure cases");
  // };

  // const { signOut } = useGoogleLogout({
  //   clientId,
  //   onLogoutSuccess,
  //   onFailure,
  // });

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
            className="brand-text ml-3 main-nav-link"
            href="/home"
          >
            Home
          </Nav.Link>
          <Link to="/registration">
            <Nav.Link
              style={{ color: "#8e8be6", textDecoration: "none" }}
              className="brand-text ml-3 main-nav-link"
              href="#"
            >
              Membership
            </Nav.Link>
          </Link>

          <Nav.Link
            style={{ color: "#8e8be6" }}
            className="brand-text ml-3 main-nav-link"
            href="#"
          >
            Help
          </Nav.Link>
          {loggedInUser ? (
            <>
              <Nav.Link className="brand-text ml-3">
                Welcome,{" "}
                {profileData?.profile?.user_profile[0]?.profile_name?.substr(
                  0,
                  profileData?.profile?.user_profile[0]?.profile_name.indexOf(
                    " "
                  )
                )}
              </Nav.Link>

              <Nav.Link href="/user/dashboard" className="brand-text ml-3">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/user" className="brand-text ml-3">
                Profile
              </Nav.Link>

              {/* <button
                onClick={signOut}
                style={{ color: "#8e8be6" }}
                className="btn"
                href="#"
              >
                Logout
              </button> */}
              <LogOut></LogOut>
            </>
          ) : (
            <>
              {" "}
              <Nav.Link
                onClick={openModal}
                style={{ color: "#8e8be6" }}
                className="brand-text ml-3 main-nav-link"
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
                className="ml-3 main-nav-link "
                href="#"
              >
                Register
              </Nav.Link>
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
