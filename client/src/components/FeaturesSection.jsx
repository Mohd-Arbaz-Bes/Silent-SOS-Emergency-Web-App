import {
  FaBell,
  FaMapMarkerAlt,
  FaUsers,
  FaEnvelope,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBell className="text-5xl text-red-600" />,
    title: "One-Tap SOS",
    description:
      "Trigger a silent emergency alert instantly with a single tap.",
  },
  {
    icon: <FaMapMarkerAlt className="text-5xl text-red-600" />,
    title: "Live GPS Tracking",
    description:
      "Share your real-time location continuously until the alert is resolved.",
  },
  {
    icon: <FaUsers className="text-5xl text-red-600" />,
    title: "Trusted Contacts",
    description:
      "Notify your emergency contacts immediately during dangerous situations.",
  },
  {
    icon: <FaEnvelope className="text-5xl text-red-600" />,
    title: "Instant Notifications",
    description:
      "Send emergency alerts through email and future SMS integration.",
  },
  {
    icon: <FaLock className="text-5xl text-red-600" />,
    title: "Secure & Private",
    description:
      "Protect user information using secure authentication and encrypted passwords.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-red-600" />,
    title: "Mobile Responsive",
    description:
      "Use the application comfortably on desktop, tablet, and mobile devices.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Safety Features
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to stay connected and protected during emergencies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}