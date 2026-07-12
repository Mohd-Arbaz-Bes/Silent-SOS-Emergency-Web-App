import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ContactForm from "../../components/ContactForm";
import ContactCard from "../../components/ContactCard";

import {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from "../../services/contactService";

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [editing, setEditing] = useState(null);

  const [search, setSearch] = useState("");

const loadContacts = async () => {
  try {
   const res = await getContacts();

setContacts(res.data.contacts);
  } catch {
    toast.error("Failed to load contacts");
  }
};

  useEffect(() => {
    loadContacts();
  }, []);

  const handleSave = async (data) => {
    try {
      setLoading(true);

      if (editing) {
        await updateContact(editing._id, data);
        toast.success("Contact Updated");
      } else {
        await addContact(data);
        toast.success("Contact Added");
      }

      setEditing(null);

      loadContacts();
    } catch {
      toast.error("Operation Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    try {
      await deleteContact(id);

      toast.success("Deleted");

      loadContacts();
    } catch {
      toast.error("Delete Failed");
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-4xl font-bold text-red-600">
          Emergency Contacts
        </h1>

        <div className="mb-8 rounded-xl bg-white p-6 shadow">

          <ContactForm
            initialData={editing}
            onSubmit={handleSave}
            loading={loading}
          />

        </div>

        <input
          placeholder="Search Contact..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="mb-8 w-full rounded-lg border p-3"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredContacts.map((contact)=>(

            <ContactCard
              key={contact._id}
              contact={contact}
              onEdit={setEditing}
              onDelete={handleDelete}
            />

          ))}

        </div>

      </div>

    </div>
  );
}