import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import safeFlyLottie from "../../../assets/jasons/business protection.json";

 import { FaHeartbeat, FaShieldAlt, FaUsers } from "react-icons/fa";
import MobileFeatureHero from "../Componenets/Setup";
export default function Home() {
  return (
    <main className="min-h-screen bg-cotton text-gray-800 font-body px-[2%]">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO TEXT */}
        <article className="text-center md:text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-snug text-gray-900"
          >
            Every girl deserves to{" "}
            <span className="text-pinky-600">feel safe</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            <strong className="text-pinky-700">SafeFly</strong> senses distress
            and alerts trusted contacts instantly — empowering freedom and
            confidence, wherever you go.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.nav
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            aria-label="Primary actions"
          >
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pinky-400 to-pinky-600 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300">
              Pre-Order Now →
            </button>
            <button className="px-8 py-3 rounded-xl border border-pinky-300 text-pinky-700 font-semibold hover:bg-pinky-50 transition-all duration-300">
              See How It Works
            </button>
          </motion.nav>


{/* FEATURE CARDS */}
<section
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-12"
  aria-label="Key features"
>
  {[
    {
      icon: <FaHeartbeat className="text-2xl" />,
      title: "Medical-grade Sensors",
      text: "Powered by PPG Technology",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "24/7 Protection",
      text: "Always-on Monitoring",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "10K+ Pre-orders",
      text: "A Strong Global Community",
    },
  ].map((card, idx) => (
    <div
      key={idx}
      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pinky-100 text-pinky-600 mb-4">
          {card.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
        <p className="text-gray-500 mt-1">{card.text}</p>
      </div>
    </div>
  ))}
</section>

        </article>

        {/* LOTTIE ANIMATION */}
        <motion.aside
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-tr from-pinky-300 to-bubblegum shadow-2xl flex items-center justify-center overflow-hidden">
            <Lottie
              animationData={safeFlyLottie}
              loop
              autoplay
              className="w-60 h-60 md:w-72 md:h-72"
            />
            <div className="absolute -bottom-6 right-6 w-20 h-20 bg-blush rounded-full shadow-lg animate-pulse" />
          </div>
        </motion.aside>
      </section>
<MobileFeatureHero/>
      {/* FOOTER CTA */}
      <footer className="bg-pinky-100 py-10 px-[2%] text-center">
        <p className="text-pinky-800 font-heading text-lg sm:text-xl">
          Join <strong>10,000+</strong> women embracing{" "}
          <span className="font-extrabold text-pinky-600 px-[3%] sm:px-1">SafeFly</span> — your
          safety, your freedom.
        </p>
      </footer>
    </main>
  );
}
