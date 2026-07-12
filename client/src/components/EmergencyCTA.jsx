import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function EmergencyCTA() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Your Safety Starts Today
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Don't wait for an emergency. Create your account, add your trusted
          contacts, and be prepared to send a silent SOS whenever you need help.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/register"
            className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Create Free Account
          </Link>

          <Link
            to="/features"
            className="flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-gray-900"
          >
            Learn More
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}