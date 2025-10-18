import React from 'react';
import { motion } from 'framer-motion';

export default function Security() {
  const features = [
    {
      title: 'End-to-End Encryption',
      desc: 'Every data transmission between SafeFly and your connected device is protected using AES-256 encryption to ensure total privacy.',
    },
    {
      title: 'Secure Cloud Storage',
      desc: 'All personal data is anonymized and stored on ISO-certified secure cloud servers with zero unauthorized access.',
    },
    {
      title: 'Biometric Authentication',
      desc: 'Your device can only be accessed through fingerprint or face authentication, ensuring that your safety data stays personal.',
    },
    {
      title: 'Emergency Access Control',
      desc: 'Only verified contacts receive your live location or distress alerts, maintaining complete control over your safety circle.',
    },
    {
      title: 'Tamper Detection',
      desc: 'The band immediately locks and sends alerts if tampering or removal attempts are detected while active.',
    },
    {
      title: 'Automatic Software Updates',
      desc: 'Security patches and firmware updates are delivered seamlessly to keep your protection system always up to date.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white">
  

      <section id="security" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-center">
          Security You Can Trust
        </motion.h1>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          SafeFly ensures that your data and safety signals remain private, protected, and under your control at every moment.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-white/60 dark:bg-white/5 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg text-indigo-600">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-2xl font-bold">Your Privacy, Our Priority</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              SafeFly’s AI never shares or sells user data. All insights are processed locally whenever possible, ensuring maximum confidentiality.
            </p>
            <div className="mt-8 inline-block px-6 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 cursor-pointer">
              Learn More About Our Policy
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white/5 dark:bg-black/90 border-t border-gray-200 dark:border-gray-800 py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          © 2025 SafeFly Inc. All rights reserved — built for your protection.
        </div>
      </footer>
    </div>
  );
}