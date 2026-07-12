import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from "../../services/adminService";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await getDashboard();
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Silent SOS Admin Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Monitor users, alerts and emergency activities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-bold">
              A
            </div>

            <div>
              <h3 className="font-semibold">Administrator</h3>
              <p className="text-sm text-gray-500">System Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">

        <div className="flex flex-wrap gap-4 mb-8">

          <Link
            to="/admin/users"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            👥 Manage Users
          </Link>

          <Link
            to="/admin/alerts"
            className="rounded-lg bg-orange-600 px-5 py-3 text-white font-medium hover:bg-orange-700 transition"
          >
            🚨 Monitor Alerts
          </Link>
        </div>


        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-lg border-l-4 border-blue-600">
            <p className="text-gray-500">Total Users</p>

            <h2 className="mt-4 text-4xl font-bold text-blue-600">
              {stats.totalUsers || 0}
            </h2>

            <p className="mt-2 text-sm text-gray-400">Registered users</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg border-l-4 border-yellow-500">
            <p className="text-gray-500">Total Alerts</p>

            <h2 className="mt-4 text-4xl font-bold text-yellow-600">
              {stats.totalAlerts || 0}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Emergency alerts created
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg border-l-4 border-red-600">
            <p className="text-gray-500">Active Alerts</p>

            <h2 className="mt-4 text-4xl font-bold text-red-600">
              {stats.activeAlerts || 0}
            </h2>

            <p className="mt-2 text-sm text-gray-400">Waiting for response</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg border-l-4 border-green-600">
            <p className="text-gray-500">Resolved Alerts</p>

            <h2 className="mt-4 text-4xl font-bold text-green-600">
              {stats.resolvedAlerts || 0}
            </h2>

            <p className="mt-2 text-sm text-gray-400">Successfully resolved</p>
          </div>
        </div>


     
        <div className="mt-10 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-5">Recent Activity</h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span>👤 New user registered</span>
              <span className="text-gray-500">Today</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>🚨 SOS alert created</span>
              <span className="text-gray-500">Today</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>📍 Live location shared</span>
              <span className="text-gray-500">Today</span>
            </div>

            <div className="flex justify-between">
              <span>✅ Emergency resolved</span>
              <span className="text-gray-500">Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
