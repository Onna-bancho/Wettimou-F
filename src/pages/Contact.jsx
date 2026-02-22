import { FaFacebookF, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="px-6 py-20 text-white bg-black">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-pink-600 md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          We’d love to hear from you. Whether you have questions, ideas, or want
          to get involved — reach out and we’ll connect with you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
        {/* Email Card */}
        <div className="p-6 transition-shadow duration-300 border border-gray-800 shadow-lg rounded-xl bg-black/30 backdrop-blur-sm hover:shadow-xl">
          <div className="flex justify-center mb-4 text-2xl text-pink-600">
            <FaEnvelope />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-pink-600">Email Us</h3>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wettimou@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-200 transition-colors hover:text-pink-500"
          >
            wettimou@gmail.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="p-6 transition-shadow duration-300 border border-gray-800 shadow-lg rounded-xl bg-black/30 backdrop-blur-sm hover:shadow-xl">
          <div className="flex justify-center mb-4 text-2xl text-pink-600">
            <FaPhoneAlt />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-pink-600">Call Us</h3>
          <p className="text-lg text-gray-200">+237 693 734 904</p>
        </div>

        {/* Location Card */}
        <div className="p-6 transition-shadow duration-300 border border-gray-800 shadow-lg rounded-xl bg-black/30 backdrop-blur-sm hover:shadow-xl">
          <div className="flex justify-center mb-4 text-2xl text-pink-600">
            <FaMapMarkerAlt />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-pink-600">Visit Us</h3>
          <p className="text-lg text-gray-200">
            Bamenda, North-West Region, Cameroon
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-lg font-semibold text-gray-300">
          Follow us on social media
        </p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/share/1WRA7c6m3k/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-pink-600 transition rounded-full bg-black/30 hover:bg-pink-600/20"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.tiktok.com/@wettimou?_r=1&_t=ZS-948HknWO7aXNow"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-pink-600 transition rounded-full bg-black/30 hover:bg-pink-600/20"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-16 border-t border-gray-800"></div>

      {/* Copyright */}
      <div className="mt-6 text-sm text-center text-gray-500">
        © 2026 Wettimou. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;