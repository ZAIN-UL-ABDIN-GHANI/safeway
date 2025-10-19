import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Mic,
  MapPin,
  Activity,
  PhoneCall,
  Shield,
} from "lucide-react";
 import ilistration from "../../../assets/images/ilistrations.png"
const features = [
  {
    icon: <HeartPulse className="w-6 h-6 text-pinky-600" />,
    title: "Heart & Stress Monitoring",
    desc: "Medical-grade PPG sensors track heart rate and detect stress anomalies in real time.",
    color: "from-pinky-100 to-pinky-50",
  },
  {
    icon: <Mic className="w-6 h-6 text-pinky-600" />,
    title: "Harsh Voice Detection",
    desc: "Advanced AI recognizes aggressive sounds and distress patterns in your environment.",
    color: "from-bubblegum to-pinky-50",
  },
  {
    icon: <MapPin className="w-6 h-6 text-pinky-600" />,
    title: "Live Location Sharing",
    desc: "Instantly shares your location with trusted contacts during emergencies.",
    color: "from-cotton to-pinky-50",
  },
  {
    icon: <Activity className="w-6 h-6 text-pinky-600" />,
    title: "Anomaly Detection",
    desc: "Detects sudden movements, falls, or unusual activity patterns automatically.",
    color: "from-blush to-pinky-50",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-pinky-600" />,
    title: "Auto-Alert System",
    desc: "Automatically calls emergency services and sends SMS alerts to contacts.",
    color: "from-candy to-pinky-50",
  },
  {
    icon: <Shield className="w-6 h-6 text-pinky-600" />,
    title: "24/7 Protection",
    desc: "Continuous monitoring with smart battery management for all-day safety.",
    color: "from-pinky-200 to-cotton",
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-pinky-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-semibold bg-pinky-100 text-pinky-700 mb-4">
          HOW IT PROTECTS YOU
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-pinky-900">
          Intelligent Safety <span className="text-pinky-500">Features</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Advanced sensors and AI work together to detect distress and alert
          help before you even need to ask.
        </p>

        {/* Feature grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false}}
              className={`bg-gradient-to-b ${f.color} rounded-xl shadow-md border border-pinky-100 p-6 text-left hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">{f.icon}</div>
                <h3 className="text-lg font-semibold text-pinky-800">
                  {f.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-xs sm:text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-pinky-500" />
            Medical-grade accuracy
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Always active
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            Privacy-first design
          </span>
        </div>
      </div>

      {/* Extra section with image */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
        <motion.img
          src={ilistration}
          alt="Safety Illustration"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-heading text-pinky-800 mb-4">
            Seamless Safety. Elegant Design.
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Our wearable integrates next-gen AI and biometric sensors to ensure
            instant response during emergencies. Its lightweight, stylish build
            fits every occasion while maintaining full-day comfort and durability.
          </p>
          <button className="px-6 py-2 bg-pinky-500 text-white font-semibold rounded-full shadow-md hover:bg-pinky-600 transition-all">
            Explore More Features
          </button>
        </div>
      </div>
    </section>
  );
}
