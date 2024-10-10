import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Meals App</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart className="nav-icon" /> Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
