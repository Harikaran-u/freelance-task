import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const isConfirm = window.confirm("Are you sure want to logout?");
    if (isConfirm) {
      navigate("/login", { replace: true });
    }
  };
  return (
    <nav className="nav-main-container">
      <h1 className="nav-head">Freelancer</h1>
      <button className="nav-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
