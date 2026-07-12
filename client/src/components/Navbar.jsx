import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaBars, FaTimes, FaShieldAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { token, user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <FaShieldAlt className="text-3xl text-red-600" />
          <span className="text-2xl font-bold text-gray-800">Silent SOS</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden gap-3 md:flex">
          {token ? (
            <>
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="rounded-lg border border-red-600 px-4 py-2 text-red-600 transition hover:bg-red-600 hover:text-white"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg border border-red-600 px-4 py-2 text-red-600 transition hover:bg-red-600 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 bg-white px-6 pb-6 shadow-md md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-red-600"
            >
              {link.name}
            </NavLink>
          ))}

          {token ? (
            <>
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg border border-red-600 px-4 py-2 text-center text-red-600"
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg border border-red-600 px-4 py-2 text-center text-red-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-red-600 px-4 py-2 text-center text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
