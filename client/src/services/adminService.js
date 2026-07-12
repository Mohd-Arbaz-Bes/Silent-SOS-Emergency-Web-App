import api from "../api/axios";

const authHeader = ()=>({

    headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }

});

export const getDashboard=()=>{

    return api.get(
        "/admin/dashboard",
        authHeader()
    );

};
export const getUsers = () => {
  return api.get("/admin/users", authHeader());
};

export const deleteUser = (id) => {
  return api.delete(`/admin/users/${id}`, authHeader());
};

export const getAlerts = () => {
  return api.get("/admin/alerts", authHeader());
};

export const updateAlert = (id, data) => {
  return api.put(`/admin/alerts/${id}`, data, authHeader());
};

export const deleteAlert = (id) => {
  return api.delete(`/admin/alerts/${id}`, authHeader());
};

export const deleteSelectedAlerts = (ids) => {
  return api.delete("/admin/alerts", {
    ...authHeader(),
    data: { ids },
  });
};