import api from "../api/axios";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const saveLocation = (data) => {
  return api.post("/locations", data, authHeader());
};

export const getLocations = (alertId) => {
  return api.get(`/locations/${alertId}`, authHeader());
};