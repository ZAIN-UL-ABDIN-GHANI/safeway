import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  Database,
  Zap,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function PrivacyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const container = {
    show: { transition: { staggerChildren: 0.15 } },
  };

  const card = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  const topFeatures = [
    {
      title: "End-to-End Encryption",
      desc: "Military grade AES 256 encryption for all data transmission and storage",
      icon: <Lock className="w-10 h-10 text-pinky-500 mx-auto" />,
    },
    {
      title: "Privacy-First Design",
      desc: "GDPR compliant with user controlled data sharing and transparent policies",
      icon: <ShieldCheck className="w-10 h-10 text-pinky-500 mx-auto" />,
    },
    {
      title: "Secure Storage",
      desc: "Encrypted local storage with secure cloud backup and redundancy",
      icon: <Database className="w-10 h-10 text-pinky-500 mx-auto" />,
    },
    {
      title: "Real-Time Processing",
      desc: "Instant threat detection with sub-second response times",
      icon: <Zap className="w-10 h-10 text-pinky-500 mx-auto" />,
    },
  ];

  const certifications = [
    { k: "GDPR Compliant", d: "Full compliance with EU data protection regulations" },
    { k: "ISO 27001 Certified", d: "Information security management certification" },
    { k: "SOC 2 Compliant", d: "Service organization control standards" },
    { k: "HIPAA Ready", d: "Health information privacy standards" },
  ];

  const controls = [
    "End-to-end encryption for all communications",
    "Regular security audits and penetration testing",
    "Transparent privacy policy and data usage",
    "User-controlled data sharing preferences",
    "Secure data centers with 24/7 monitoring",
    "Right to data deletion and export",
  ];

  return (
    <main className="bg-gradient-to-b from-pinky-50 via-cotton to-white min-h-screen flex flex-col items-center py-16 px-6 font-body">
      <section className="max-w-6xl w-full">
        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold shadow-sm">
            Security & Privacy
          </span>
        </div>

        {/* Hero Section */}
        <motion.div
          className="text-center mt-6"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-heading text-pinky-900">
            Your Privacy is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pinky-400 to-pinky-600 animate-gradient">
              Our Priority
            </span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We use enterprise-grade security measures to ensure your data remains
            private and protected at all times.
          </p>
        </motion.div>

        {/* Top Feature Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {topFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={card}
              className="p-6 rounded-2xl bg-white border border-pinky-100 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div>{f.icon}</div>
              <h3 className="text-lg font-semibold text-pinky-800 mt-3">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Your Data, Your Control */}
        <motion.section
          className="mt-20 bg-white/60 rounded-2xl p-8 shadow-sm backdrop-blur-sm"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h2 className="text-center font-heading text-2xl md:text-3xl text-pinky-800">
            Your Data, Your Control
          </h2>
          <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
            We believe in complete transparency and giving you full control over your personal information.
          </p>

          {/* Controls Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
            {controls.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Compliance Section */}
        <motion.section
          className="mt-20"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h3 className="text-center font-heading text-2xl md:text-3xl text-pinky-800">
            Industry Compliance & Certifications
          </h3>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Trusted by leading organizations and certified to the highest standards.
          </p>

          {/* Certifications */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, idx) => (
              <motion.div
                key={idx}
                variants={card}
                className="p-6 rounded-2xl bg-white border border-pinky-100 text-center shadow-sm hover:shadow-md transition"
              >
                <Shield className="w-10 h-10 text-pinky-500 mx-auto mb-3" />
                <h4 className="text-pinky-800 font-semibold">{c.k}</h4>
                <p className="text-gray-600 text-sm mt-2">{c.d}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-1 rounded-full bg-green-100 text-green-800 font-medium">
              Enterprise Security
            </span>
            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              Zero-Knowledge Architecture
            </span>
            <span className="px-4 py-1 rounded-full bg-pinky-100 text-pinky-700 font-medium">
              Regular Security Audits
            </span>
          </div>
        </motion.section>

      </section>
    </main>
  );
}
