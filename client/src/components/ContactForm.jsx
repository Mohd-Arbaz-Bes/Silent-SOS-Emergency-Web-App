import { useState, useEffect } from "react";

export default function ContactForm({
  initialData,
  onSubmit,
  loading,
}) {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="relationship"
        placeholder="Relationship"
        value={formData.relationship}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
      >
        {loading ? "Saving..." : "Save Contact"}
      </button>
    </form>
  );
}