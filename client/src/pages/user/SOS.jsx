import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { createAlert } from "../../services/alertService";
import LiveMap from "../../components/LiveMap";
import { saveLocation } from "../../services/locationService";

export default function SOS() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [alertId, setAlertId] = useState(null);

  const [loading, setLoading] = useState(false);

  const sendSOS = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported");

      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const location = {
            latitude: position.coords.latitude,

            longitude: position.coords.longitude,
          };

          const res = await createAlert(location);

          setAlertId(res.data.alert._id);

          setLatitude(location.latitude);

          setLongitude(location.longitude);

          toast.success("SOS Alert Sent Successfully 🚨");
        } catch (error) {
          toast.error(error.response?.data?.message || "Failed to send SOS");
        } finally {
          setLoading(false);
        }
      },

      () => {
        toast.error("Unable to get your location");

        setLoading(false);
      },

      {
        enableHighAccuracy: true,

        timeout: 10000,
      },
    );
  };

  useEffect(() => {
    if (!alertId) return;

    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatitude(position.coords.latitude);

        setLongitude(position.coords.longitude);

        await saveLocation({
          alertId,

          latitude: position.coords.latitude,

          longitude: position.coords.longitude,
        });
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [alertId]);

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-100 p-6">
      <div className="mx-auto max-w-5xl">
        

        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-red-700">🚨 Emergency SOS</h1>

          <p className="mt-3 text-gray-600">
            Press SOS button only in emergency situations. Your location will be
            shared with trusted contacts.
          </p>
        </div>

       

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex flex-col items-center">
           

            <button
              onClick={sendSOS}
              disabled={loading}
              className="
relative
flex
h-60
w-60
items-center
justify-center
rounded-full
bg-red-600
text-6xl
font-bold
text-white
shadow-2xl
transition
duration-300
hover:scale-110
hover:bg-red-700
disabled:cursor-not-allowed
disabled:opacity-60
"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-30"></span>

              <span className="relative">{loading ? "Sending" : "SOS"}</span>
            </button>

            <p className="mt-6 text-gray-500">
              One tap sends your emergency alert.
            </p>
          </div>
        </div>


        {alertId && (
          <div className="mt-8 rounded-2xl bg-green-50 p-6 shadow">
            <h2 className="text-xl font-bold text-green-700">✅ SOS Active</h2>

            <p className="mt-2 text-gray-600">
              Your location is being tracked and updated.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-white p-4">
                <p className="text-sm text-gray-500">Latitude</p>

                <p className="font-bold">{latitude}</p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-sm text-gray-500">Longitude</p>

                <p className="font-bold">{longitude}</p>
              </div>
            </div>
          </div>
        )}

       

        {latitude && longitude && (
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="mb-5 text-2xl font-bold">📍 Live Location</h2>

            <LiveMap latitude={latitude} longitude={longitude} />
          </div>
        )}
      </div>
    </div>
  );
}
