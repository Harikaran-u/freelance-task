import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/navbar.css";
import { ReactElement } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login", { replace: true });
  };
  return (
    <nav className="nav-main-container">
      <h1 className="nav-head">Freelancer</h1>
      <div className="nav-action-container">
        <Popup
          trigger={
            <button className="profile-btn">
              <MdLogout />
            </button>
          }
          modal
        >
          {(close) => {
            return (
              <>
                <div className="header"> Are you sure want to logout? </div>
                <div className="actions">
                  <button className="nav-btn" onClick={handleLogout}>
                    Yes
                  </button>
                  <button className="nav-btn" onClick={close}>
                    No
                  </button>
                </div>
              </>
            );
          }}
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
