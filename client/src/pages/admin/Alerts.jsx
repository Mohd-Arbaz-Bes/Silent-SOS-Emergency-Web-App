import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import {
  getAlerts,
  updateAlert,
  deleteAlert,
  deleteSelectedAlerts,
} from "../../services/adminService";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedAlerts, setSelectedAlerts] = useState([]);

  const loadAlerts = async () => {
    try {
      const res = await getAlerts();
      setAlerts(res.data);
    } catch {
      toast.error("Failed to load alerts");
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateAlert(id, { status });

      toast.success("Status Updated");

      loadAlerts();
    } catch {
      toast.error("Update Failed");
    }
  };
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAlerts(filteredAlerts.map((a) => a._id));
    } else {
      setSelectedAlerts([]);
    }
  };

  const handleSelect = (id) => {
    if (selectedAlerts.includes(id)) {
      setSelectedAlerts(selectedAlerts.filter((item) => item !== id));
    } else {
      setSelectedAlerts([...selectedAlerts, id]);
    }
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this alert?")) return;

    try {
      await deleteAlert(id);

      toast.success("Alert Deleted");

      loadAlerts();
    } catch {
      toast.error("Delete Failed");
    }
  };
  const handleDeleteSelected = async () => {
    if (selectedAlerts.length === 0) {
      return toast.error("Select alerts first");
    }

    if (!window.confirm(`Delete ${selectedAlerts.length} selected alerts?`)) {
      return;
    }

    try {
      await deleteSelectedAlerts(selectedAlerts);

      toast.success("Selected Alerts Deleted");

      setSelectedAlerts([]);

      loadAlerts();
    } catch {
      toast.error("Delete Failed");
    }
  };
  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const fullName = alert.user?.fullName?.toLowerCase() || "";
      const email = alert.user?.email?.toLowerCase() || "";

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        email.includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || alert.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [alerts, search, statusFilter]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          🚨 SOS Alert Monitoring
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor and manage all emergency alerts in real time.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
        <div className="rounded-xl bg-white p-6 shadow border-l-4 border-blue-600">
          <p className="text-gray-500">Total Alerts</p>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">
            {alerts.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow border-l-4 border-red-600">
          <p className="text-gray-500">Active Alerts</p>

          <h2 className="mt-3 text-4xl font-bold text-red-600">
            {alerts.filter((a) => a.status === "Sent").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow border-l-4 border-yellow-500">
          <p className="text-gray-500">Acknowledged</p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-600">
            {alerts.filter((a) => a.status === "Acknowledged").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow border-l-4 border-green-600">
          <p className="text-gray-500">Resolved</p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {alerts.filter((a) => a.status === "Resolved").length}
          </h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="🔍 Search by user or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border bg-white px-4 py-3 md:w-96"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border bg-white px-4 py-3"
        >
          <option>All</option>
          <option>Sent</option>
          <option>Acknowledged</option>
          <option>Resolved</option>
        </select>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={
              filteredAlerts.length > 0 &&
              selectedAlerts.length === filteredAlerts.length
            }
          />

          <span>Select All</span>
        </label>

        <button
          onClick={handleDeleteSelected}
          className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
        >
          🗑 Delete Selected
        </button>
      </div>

      <table className="w-full rounded bg-white shadow">
        <thead className="bg-red-600 text-white">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  filteredAlerts.length > 0 &&
                  selectedAlerts.length === filteredAlerts.length
                }
              />
            </th>

            <th className="p-3">User</th>

            <th>Email</th>

            <th>Status</th>

            <th>Latitude</th>

            <th>Longitude</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredAlerts.length === 0 ? (
            <tr>
              <td colSpan="7" className="p-8 text-center text-gray-500">
                No Alerts Found
              </td>
            </tr>
          ) : (
            filteredAlerts.map((alert) => (
              <tr key={alert._id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedAlerts.includes(alert._id)}
                    onChange={() => handleSelect(alert._id)}
                  />
                </td>

                <td className="p-3 font-medium">{alert.user?.fullName}</td>

                <td>{alert.user?.email}</td>

                <td>
                  {alert.status === "Sent" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-red-700">
                      Sent
                    </span>
                  )}

                  {alert.status === "Acknowledged" && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">
                      Acknowledged
                    </span>
                  )}

                  {alert.status === "Resolved" && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                      Resolved
                    </span>
                  )}
                </td>

                <td>{alert.latitude.toFixed(5)}</td>

                <td>
                  <a
                    href={`https://www.google.com/maps?q=${alert.latitude},${alert.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Location
                  </a>
                </td>

                <td>
                  <div className="flex flex-col gap-2">
                    <select
                      value={alert.status}
                      onChange={(e) => handleStatus(alert._id, e.target.value)}
                      className="rounded border p-2"
                    >
                      <option>Sent</option>
                      <option>Acknowledged</option>
                      <option>Resolved</option>
                    </select>

                    <button
                      onClick={() => handleDelete(alert._id)}
                      className="rounded bg-red-600 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
