import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login", { replace: true });
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav-main-container">
      <Link to="/" className="link-style">
        <img
          src="https://res.cloudinary.com/diuvnny8c/image/upload/v1715071296/pngegg_1_doewyz.png"
          className="freelance-logo"
          alt="freelancer-logo"
        />
      </Link>
      <div className="nav-action-container">
        <Popup
          open={isOpen}
          trigger={
            <button className="profile-btn">
              <MdLogout onClick={openPopup} />
            </button>
          }
          modal
          nested
        >
          <div className="header"> Are you sure want to logout? </div>
          <div className="actions">
            <button className="nav-btn" onClick={handleLogout}>
              Yes
            </button>
            <button className="nav-btn" onClick={closePopup}>
              No
            </button>
          </div>
        </Popup>

        <Link to="/edit-profile" className="link-style">
          <button className="profile-btn">
            <FaRegUser />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
