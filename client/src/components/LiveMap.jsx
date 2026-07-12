import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LiveMap({ latitude, longitude }) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>
          Your Current Location
        </Popup>
      </Marker>

    </MapContainer>
  );
}