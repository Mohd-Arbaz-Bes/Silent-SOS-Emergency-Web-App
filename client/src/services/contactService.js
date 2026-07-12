import api from "../api/axios";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getContacts = () => {
  return api.get("/contacts", authHeader());
};

export const addContact = (data) => {
  return api.post("/contacts", data, authHeader());
};

export const updateContact = (id, data) => {
  return api.put(`/contacts/${id}`, data, authHeader());
};

export const deleteContact = (id) => {
  return api.delete(`/contacts/${id}`, authHeader());
};