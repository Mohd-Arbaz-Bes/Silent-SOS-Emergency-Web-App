import api from "../api/axios";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const createAlert = (data) => {
  return api.post("/alerts", data, authHeader());
};

export const getAlerts = () => {
  return api.get("/alerts", authHeader());
};

export const updateAlertStatus = (id, data) => {
  return api.put(`/alerts/${id}`, data, authHeader());
};