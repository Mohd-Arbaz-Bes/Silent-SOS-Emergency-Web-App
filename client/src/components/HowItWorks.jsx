import {
  FaUserPlus,
  FaUserFriends,
  FaBell,
  FaMapMarkedAlt,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaUserPlus className="text-5xl text-red-600" />,
    title: "Create Your Account",
    description:
      "Register securely and complete your personal profile.",
  },
  {
    id: "02",
    icon: <FaUserFriends className="text-5xl text-red-600" />,
    title: "Add Trusted Contacts",
    description:
      "Save family members or friends who should receive emergency alerts.",
  },
  {
    id: "03",
    icon: <FaBell className="text-5xl text-red-600" />,
    title: "Trigger Silent SOS",
    description:
      "Press the SOS button to activate an emergency alert without making a call.",
  },
  {
    id: "04",
    icon: <FaMapMarkedAlt className="text-5xl text-red-600" />,
    title: "Share Live Location",
    description:
      "Your trusted contacts receive your live location and emergency status instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How Silent SOS Works
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Get emergency assistance in four simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute right-4 top-4 text-5xl font-bold text-red-100">
                {step.id}
              </div>

              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="mb-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}