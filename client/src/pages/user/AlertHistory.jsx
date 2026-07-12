import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getAlerts,
  updateAlertStatus,
} from "../../services/alertService";

export default function AlertHistory() {
  const [alerts, setAlerts] = useState([]);
  const [search, setSearch] = useState("");

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

  const changeStatus = async (id, status) => {
    try {
      await updateAlertStatus(id, { status });

      toast.success("Status Updated");

      loadAlerts();
    } catch {
      toast.error("Update Failed");
    }
  };

  const filteredAlerts = alerts.filter((alert) =>
    alert.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-6 text-4xl font-bold text-red-600">
        Alert History
      </h1>

      <input
        type="text"
        placeholder="Search by status..."
        className="mb-6 w-full rounded-lg border p-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto rounded-xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-red-600 text-white">

            <tr>

              <th className="p-4">Date</th>

              <th className="p-4">Latitude</th>

              <th className="p-4">Longitude</th>

              <th className="p-4">Status</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredAlerts.map((alert) => (

              <tr
                key={alert._id}
                className="border-b"
              >

                <td className="p-4">
                  {new Date(alert.createdAt).toLocaleString()}
                </td>

                <td className="p-4">
                  {alert.latitude}
                </td>

                <td className="p-4">
                  {alert.longitude}
                </td>

                <td className="p-4">

                  <span className="rounded bg-red-100 px-3 py-1">

                    {alert.status}

                  </span>

                </td>

                <td className="p-4">

                  {alert.status !== "Resolved" && (

                    <button
                      onClick={() =>
                        changeStatus(alert._id, "Resolved")
                      }
                      className="rounded bg-green-600 px-4 py-2 text-white"
                    >
                      Resolve
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}