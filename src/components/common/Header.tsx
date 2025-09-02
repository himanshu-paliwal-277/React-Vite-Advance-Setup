import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
