import { createContext, useEffect, useState } from "react";
import { profile } from "../services/authService";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await profile(token);

        setUser(res.data);
      } catch (error) {
        logoutUser();
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const loginUser = (userData, jwt) => {
    setUser(userData);

    setToken(jwt);

    localStorage.setItem("token", jwt);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}