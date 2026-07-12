import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emergencyData = {
  India: {
    national: "112",
    police: "100",
    ambulance: "108",
    fire: "101",
  },
  USA: {
    national: "911",
    police: "911",
    ambulance: "911",
    fire: "911",
  },
  UK: {
    national: "999",
    police: "999",
    ambulance: "999",
    fire: "999",
  },
  Australia: {
    national: "000",
    police: "000",
    ambulance: "000",
    fire: "000",
  },
  Canada: {
    national: "911",
    police: "911",
    ambulance: "911",
    fire: "911",
  },
};

const Contact = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState("India");

  const data = emergencyData[country];

  const handleSOS = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/sos");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-600">
          Contact & Emergency Support
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Your safety is our highest priority.
        </p>

        <div className="mt-10 flex justify-center">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border rounded-lg px-4 py-3 w-72 shadow"
          >
            {Object.keys(emergencyData).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Support */}

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl text-center">📧</div>

            <h2 className="text-2xl font-bold text-center mt-4">Support</h2>

            <p className="text-center mt-4 text-gray-700">
              support@silentsos.com
            </p>

            <p className="text-center text-gray-500 mt-3">
              24×7 assistance for account and application related queries.
            </p>
          </div>

          {/* Emergency Numbers */}

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl text-center">🚨</div>

            <h2 className="text-2xl font-bold text-center mt-4">
              Emergency Numbers
            </h2>

            <div className="space-y-3 mt-6">
              <div className="flex justify-between">
                <span>National</span>
                <span className="font-bold text-red-600">{data.national}</span>
              </div>

              <div className="flex justify-between">
                <span>Police</span>
                <span className="font-bold text-red-600">{data.police}</span>
              </div>

              <div className="flex justify-between">
                <span>Ambulance</span>
                <span className="font-bold text-red-600">{data.ambulance}</span>
              </div>

              <div className="flex justify-between">
                <span>Fire</span>
                <span className="font-bold text-red-600">{data.fire}</span>
              </div>
            </div>
          </div>

          {/* Safety */}

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-5xl text-center">🛡️</div>

            <h2 className="text-2xl font-bold text-center mt-4">
              Safety Services
            </h2>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ Live GPS Tracking</li>
              <li>✅ One Click SOS Alert</li>
              <li>✅ Trusted Contacts</li>
              <li>✅ Secure & Private Alerts</li>
            </ul>
          </div>
        </div>

        {/* Notice */}

        <div className="bg-red-600 text-white rounded-2xl p-8 mt-12 shadow-lg">
          <h2 className="text-2xl font-bold">⚠ Emergency Notice</h2>

          <p className="mt-4">
            If you are in immediate danger, press the SOS button immediately.
            Silent SOS will help notify your trusted emergency contacts with
            your live location.
          </p>
        </div>

        {/* Button */}

        <div className="text-center mt-10">
          <button
            onClick={handleSOS}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-4 rounded-full transition"
          >
            🚨 GO TO SOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
