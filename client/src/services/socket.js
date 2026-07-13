import { io } from "socket.io-client";

const socket = io("https://silent-sos-backend-nlww.onrender.com");

export default socket;