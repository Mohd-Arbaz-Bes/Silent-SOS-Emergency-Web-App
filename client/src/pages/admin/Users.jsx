import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getUsers, deleteUser } from "../../services/adminService";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const loadUsers = async () => {
    try {
      const res = await getUsers();

      setUsers(res.data);
    } catch {
      toast.error("Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);

      toast.success("User Deleted");

      loadUsers();
    } catch {
      toast.error("Delete Failed");
    }
  };

  const filteredUsers = users.filter((user) => {
    const name = user.name?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const phone = user.phone?.toLowerCase() || "";

    return (
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      phone.includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">👥 Manage Users</h1>

        <p className="mt-2 text-gray-500">
          View and manage registered users of Silent SOS.
        </p>
      </div>

      {/* Stats Card */}

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">Total Users</p>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">
            {users.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">Admin Users</p>

          <h2 className="mt-3 text-4xl font-bold text-purple-600">
            {users.filter((user) => user.role === "admin").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">Normal Users</p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {users.filter((user) => user.role === "user").length}
          </h2>
        </div>
      </div>

      {/* Search */}

      <input
        className="mb-8 w-full rounded-xl border bg-white px-5 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="🔍 Search name, email or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4 text-left">User</th>

              <th className="text-left">Email</th>

              <th className="text-left">Phone</th>

              <th className="text-left">Role</th>

              <th className="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500">
                  No Users Found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  {/* Name */}

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          {user.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          User ID: {user._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>{user.phone || "Not Added"}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium
                  
                ${
                  user.role === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-green-100 text-green-700"
                }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
