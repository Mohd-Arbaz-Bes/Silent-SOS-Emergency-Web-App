import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        {/* Logo */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <FaShieldAlt className="text-3xl text-red-600" />
            <h2 className="text-2xl font-bold text-white">
              Silent SOS
            </h2>
          </div>

          <p className="leading-7">
            A secure emergency alert platform that helps users
            silently notify trusted contacts and share live location.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Resources
          </h3>

          <ul className="space-y-3">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>support@silentsos.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>India</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © 2026 Silent SOS Emergency Web App. All Rights Reserved.
      </div>
    </footer>
  );
}