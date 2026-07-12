import { FaPhone, FaEnvelope, FaEdit, FaTrash } from "react-icons/fa";

export default function ContactCard({
  contact,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h3 className="text-xl font-bold">
        {contact.name}
      </h3>

      <p className="mt-2 text-gray-600">
        {contact.relationship}
      </p>

      <p className="mt-2 flex items-center gap-2">
        <FaPhone />
        {contact.phone}
      </p>

      <p className="mt-2 flex items-center gap-2">
        <FaEnvelope />
        {contact.email}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onEdit(contact)}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(contact._id)}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}