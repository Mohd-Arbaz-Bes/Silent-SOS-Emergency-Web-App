import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const { user, logoutUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      <div className="bg-white shadow">
        <div className="flex items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {user?.fullName || "User"} 👋
            </h1>

            <p className="text-gray-500 mt-2">Your personal safety dashboard</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-bold">
              {user?.fullName?.charAt(0) || "U"}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Safety Status */}

        <div className="rounded-xl bg-green-600 p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold">🟢 Safety Status: Active</h2>

          <p className="mt-2">Your emergency system is ready.</p>
        </div>

        {/* Action Cards */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            to="/sos"
            className="rounded-xl bg-red-600 p-6 text-white shadow-lg hover:bg-red-700"
          >
            <h2 className="text-2xl font-bold">🚨 SOS Alert</h2>

            <p className="mt-3">Send emergency alert with live location.</p>
          </Link>

          <Link
            to="/contacts"
            className="rounded-xl bg-blue-600 p-6 text-white shadow-lg hover:bg-blue-700"
          >
            <h2 className="text-2xl font-bold">📞 Emergency Contacts</h2>

            <p className="mt-3">Manage trusted contacts.</p>
          </Link>

          <Link
            to="/alerts"
            className="rounded-xl bg-purple-600 p-6 text-white shadow-lg hover:bg-purple-700"
          >
            <h2 className="text-2xl font-bold">📋 Alert History</h2>

            <p className="mt-3">View previous emergency alerts.</p>
          </Link>
        </div>

        {/* Emergency Button */}

        <div className="mt-10 rounded-xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold mb-5">Quick Emergency Action</h2>

          <Link
            to="/sos"
            className="inline-block rounded-full bg-red-600 px-12 py-5 text-xl font-bold text-white shadow-lg hover:bg-red-700"
          >
            🚨 PRESS SOS
          </Link>
        </div>

        {/* Safety Tips */}

        <div className="mt-10 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold mb-5">Safety Tips</h2>

          <ul className="space-y-3 text-gray-600">
            <li>✅ Keep emergency contacts updated</li>

            <li>✅ Allow GPS permission for accurate location</li>

            <li>✅ Test SOS functionality regularly</li>

            <li>✅ Stay connected with trusted people</li>
          </ul>
        </div>

        {/* Logout */}

        <div className="mt-8">
          <button
            onClick={logoutUser}
            className="rounded-lg bg-gray-900 px-8 py-3 text-white hover:bg-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
