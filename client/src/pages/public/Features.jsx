const Features = () => {
  const features = [
    "One Click SOS Alert",

    "Real Time GPS Tracking",

    "Emergency Contacts",

    "Alert History",

    "Admin Monitoring",

    "Secure Authentication",
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-red-600">
        Powerful Safety Features
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-6">
        {features.map((item, index) => (
          <div key={index} className="p-6 rounded-xl shadow-lg border">
            <h2 className="text-xl font-semibold">{item}</h2>

            <p className="mt-3 text-gray-600">
              Designed to provide quick emergency support.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
