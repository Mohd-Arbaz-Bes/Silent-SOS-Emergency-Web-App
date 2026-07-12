import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import socket from "./services/socket";
import toast from "react-hot-toast";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Socket Connected:", socket.id);
    });

    socket.on("newAlert", (data) => {
      console.log("🚨 New Alert:", data);

      toast.success("🚨 New SOS Alert Received");
    });

    return () => {
      socket.off("connect");
      socket.off("newAlert");
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <AppRoutes />
    </>
  );
}

export default App;