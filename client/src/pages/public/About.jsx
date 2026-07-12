const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-red-600">
          About Silent SOS
        </h1>

        <p className="mt-8 text-lg text-gray-700 text-center">
          Silent SOS is an emergency safety platform designed to help people
          send instant alerts without making a phone call.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold">Fast Emergency Response</h2>

            <p>One click SOS alert system for dangerous situations.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold">Privacy Focused</h2>

            <p>Silent alerts without creating attention.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold">Live Location</h2>

            <p>Share real-time GPS location with trusted contacts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
