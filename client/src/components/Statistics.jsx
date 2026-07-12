import {
  FaUsers,
  FaBell,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-5xl text-red-600" />,
    number: "500+",
    title: "Registered Users",
  },
  {
    icon: <FaBell className="text-5xl text-red-600" />,
    number: "1,200+",
    title: "Alerts Sent",
  },
  {
    icon: <FaCheckCircle className="text-5xl text-red-600" />,
    number: "98%",
    title: "Alert Delivery Rate",
  },
  {
    icon: <FaClock className="text-5xl text-red-600" />,
    number: "24×7",
    title: "System Availability",
  },
];

export default function Statistics() {
  return (
    <section className="bg-red-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Trusted by Thousands
          </h2>

          <p className="mt-4 text-lg text-red-100">
            Helping people stay safe with fast and reliable emergency alerts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition hover:bg-white/20"
            >
              <div className="mb-6 flex justify-center text-white">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}