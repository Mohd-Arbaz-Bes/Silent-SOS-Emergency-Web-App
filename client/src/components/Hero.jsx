import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  const handleSOS = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/sos");
    } else {
      navigate("/register");
    }
  };
  return (
    <section className="bg-linear-to-br from-red-50 via-white to-red-100">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600">
            <FaShieldAlt />
            <span>Personal Safety Platform</span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Stay Safe.
            <br />
            <span className="text-red-600">One Tap Can Save Your Life.</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
            Send silent emergency alerts, share your live location, and
            instantly notify trusted contacts when every second matters.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/register"
              className="rounded-xl bg-red-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-red-700"
            >
              Get Started
            </Link>

            <Link
              to="/features"
              className="rounded-xl border border-red-600 px-8 py-4 text-center font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-1 justify-center">
          <div className="rounded-3xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-full bg-red-100 p-8">
                <FaLocationArrow className="text-7xl text-red-600" />
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Live Location
              </h2>

              <p className="max-w-xs text-center text-gray-600">
                Your trusted contacts receive your real-time location instantly
                during an emergency.
              </p>

              <button
                onClick={handleSOS}
                className="rounded-full bg-red-600 px-10 py-4 font-bold text-white transition hover:bg-red-700"
              >
                🚨 SOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
