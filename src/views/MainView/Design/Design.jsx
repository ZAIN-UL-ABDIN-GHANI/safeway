import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Battery, Droplet, Feather, Layers } from "lucide-react";

export default function DesignComfortSection() {
  const swatches = [
    { id: "rose", label: "Rose Quartz", color: "#ff99cc" },
    { id: "bubble", label: "Bubblegum", color: "#ffb3da" },
    { id: "magenta", label: "Magenta", color: "#ff3390" },
    { id: "charcoal", label: "Charcoal", color: "#4b042a" },
    { id: "ice", label: "Ice", color: "#fff5fa" },
  ];

  const features = [
    {
      icon: <Battery className="w-6 h-6" />,
      title: "7-Day Battery Life",
      desc: "Extended battery with smart power management and wireless charging.",
      stat: "168 hours",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Water Resistant",
      desc: "IP68 rating for swimming, showering, and all-weather protection.",
      stat: "IP68",
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Ultra Lightweight",
      desc: "Ergonomic design that you'll forget you're wearing.",
      stat: "28g",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Skin-Friendly Materials",
      desc: "Medical-grade silicone with hypoallergenic properties.",
      stat: "Hypoallergenic",
    },
  ];

  const [selected, setSelected] = useState(swatches[2]); // Default: magenta

  const glowVariants = {
    initial: { scale: 1, opacity: 0.9 },
    animate: {
      scale: 1.02,
      opacity: 1,
      transition: { duration: 1.2, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-pinky-50 via-cotton to-white py-16 px-4 sm:px-6 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-10 flex flex-col items-center justify-center">
        <p className="inline-block px-1 py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold bg-pinky-100 text-pinky-700">
          Design & Comfort
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-pinky-900 leading-tight">
          Beautifully Designed,{" "}
          <span className="text-pinky-500">Comfortably Worn</span>
        </h2>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-700 max-w-xl md:max-w-2xl">
          Safety doesn't mean compromising on style. SafeFly combines elegant
          design with everyday comfort.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center gap-10">
          {/* iPhone Mockup */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.05}
            className="w-fit"
          >
            <div className="relative bg-gradient-to-b from-pinky-100 to-pinky-200 w-[240px] sm:w-[260px] md:w-[280px] h-[420px] sm:h-[430px] rounded-[3rem] border-[6px] border-pinky-300 shadow-2xl overflow-hidden">
              {/* notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-3xl w-24 h-5"></div>

              {/* screen */}
              <div className="absolute inset-[6px] bg-gradient-to-b from-white to-pinky-50 rounded-[2.6rem] flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="rounded-full w-20 h-20 flex items-center justify-center"
                  style={{
                    background: selected.color,
                    boxShadow: `0 10px 35px ${selected.color}66, inset 0 3px 10px rgba(255,255,255,0.6)`,
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/90" />
                </motion.div>

                <h3 className="mt-6 text-lg font-semibold text-pinky-800">
                  Elegant Wearable
                </h3>
                <p className="text-xs text-gray-600 mt-2 max-w-[200px]">
                  Smart, lightweight, and designed for comfort — your perfect
                  daily companion.
                </p>
              </div>

              {/* side buttons */}
              <div className="absolute left-0 top-24 w-1 h-12 bg-pinky-400 rounded-r-md"></div>
              <div className="absolute left-0 top-44 w-1 h-8 bg-pinky-400 rounded-r-md"></div>
              <div className="absolute right-0 top-32 w-1 h-16 bg-pinky-400 rounded-l-md"></div>

              {/* bottom line */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-400 rounded-full w-24 h-1.5"></div>
            </div>
          </Tilt>

          {/* Color Selection */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-[10px] sm:text-xs text-gray-600">
              Choose Your Color
            </span>
            <div className="flex gap-3 flex-wrap justify-center">
              {swatches.map((s) => {
                const active = s.id === selected.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelected(s)}
                    aria-label={`Choose color ${s.label}`}
                    className={`w-8 h-8 rounded-full border-2 transform transition-all ${
                      active
                        ? "border-pinky-700 scale-110"
                        : "border-gray-300 hover:scale-105"
                    }`}
                    style={{
                      background: s.color,
                      boxShadow: active
                        ? `0 8px 30px ${s.color}33, inset 0 2px 6px rgba(255,255,255,0.6)`
                        : "0 2px 8px rgba(8,15,30,0.04)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Glow Background */}
          <motion.div
            className="absolute  top-8 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
            style={{
              filter: "blur(48px)",
              zIndex: -1,
              background: `radial-gradient(closest-side, ${selected.color}33, transparent)`,
            }}
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <article
                key={idx}
                className="p-5 rounded-xl bg-white/80 border border-pinky-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-lg p-3 bg-pinky-50 text-pinky-600">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-pinky-800 font-semibold">{f.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                    <div className="mt-2 text-xs text-gray-400">{f.stat}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
            <span className="text-sm text-gray-600 font-medium">
              Material & Comfort
            </span>
            <div className="flex gap-2 flex-wrap">
              <button className="px-3 py-1 rounded-full border text-xs text-gray-600 bg-white/60">
                Hypoallergenic
              </button>
              <button className="px-3 py-1 rounded-full border text-xs text-gray-600 bg-white/60">
                Breathable
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Card */}
      <div className="w-full mt-12 max-w-sm sm:max-w-md mx-auto bg-gradient-to-b from-white to-pinky-50 rounded-2xl shadow-md p-6 sm:p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-pinky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <h3 className="text-lg sm:text-xl font-semibold text-pinky-800">
            Size Guide
          </h3>
        </div>

        <div className="space-y-4 text-left">
          {[
            { size: "Small", wrist: "14–16cm", tag: "Teenagers" },
            { size: "Medium", wrist: "16–18cm", tag: "Most Women" },
            { size: "Large", wrist: "18–20cm", tag: "Larger Wrists" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-100 pb-2"
            >
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-800">
                  {item.size}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Wrist: {item.wrist}
                </p>
              </div>
              <span className="border border-gray-400 rounded-full px-3 py-1 text-[10px] sm:text-xs text-gray-700">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        <Link
          to="/design"
          className="mt-6 sm:mt-8 w-full bg-pinky-500 hover:bg-pinky-600 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-full shadow-md transition-all text-center block"
        >
          View Design Details
        </Link>
      </div>
    </section>
  );
}
