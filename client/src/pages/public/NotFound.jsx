import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>

      <p className="mt-4 text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Go Home
      </Link>
    </div>
  );
}