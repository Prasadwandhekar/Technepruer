import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user, LogoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out successfully.",
          icon: "success",
        }).then(() => {
          LogoutUser();
          navigate("/login");
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "You have canceled the logout action.",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <nav>
        <Link to="/" className="title">
          PRADEX
        </Link>
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={isOpen ? "open" : ""}>
          <li>
            <NavLink to="/" className="actives">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="actives">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="actives">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="actives">
              Contact
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink to="/logout" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/register" className="actives">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="actives">
                  Login
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="profile-link">
              <NavLink to={`/user/${user._id}/profile`} className="actives">
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
