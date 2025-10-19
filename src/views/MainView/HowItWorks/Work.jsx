// EmergencyResponseSliderWithReactIcons.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers,
  FiAlertTriangle,
  FiSmartphone,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
} from "react-icons/fi";

import illustrationSrc from "../../../assets/images/howitwork.png"


/* card data using react-icons */
const cardData = [
  {
    id: "contacts",
    title: "Contacts Notified",
    subtitle:
      "Your trusted network receives immediate alerts with real-time updates.",
    note: "Unlimited contacts with priority levels",
    icon: <FiUsers className="w-6 h-6" />,
    accent: "bg-pinky-100 text-pinky-700",
  },
  {
    id: "trigger",
    title: "Trigger Detected",
    subtitle:
      "Automatic sensors detect triggers (falls, abnormal vitals) and flag emergencies.",
    note: "AI-verified alerts",
    icon: <FiAlertTriangle className="w-6 h-6" />,
    accent: "bg-blush text-pinky-800",
  },
  {
    id: "appwake",
    title: "Phone App Wake",
    subtitle:
      "Automatic wake & notification on paired phone apps to prompt user verification.",
    note: "Smart escalation rules",
    icon: <FiSmartphone className="w-6 h-6" />,
    accent: "bg-bubblegum text-pinky-800",
  },
  {
    id: "location",
    title: "Location Shared",
    subtitle:
      "High-accuracy location shared instantly with responders and trusted contacts.",
    note: "GPS + network-assisted accuracy",
    icon: <FiMapPin className="w-6 h-6" />,
    accent: "bg-cotton text-pinky-800",
  },
];

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function EmergencyResponseSliderWithReactIcons({
  initialIndex = 0,
  autoplay = true,
  autoplaySpeed = 4000,
}) {
  const [index, setIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef(null);
  const containerRef = useRef(null);
  const count = cardData.length;

  const go = useCallback(
    (newIndex, dir = 1) => {
      setDirection(dir);
      setIndex((newIndex + count) % count);
    },
    [count]
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    if (!autoplay || paused) return;
    autoRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, autoplaySpeed);
    return () => clearInterval(autoRef.current);
  }, [autoplay, autoplaySpeed, paused, count]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") {
        setPaused(true);
        prev();
      } else if (e.key === "ArrowRight") {
        setPaused(true);
        next();
      } else if (e.key === " ") {
        setPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const userAction = (fn) => {
    setPaused(true);
    fn();
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-pinky-50 py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-pinky-900">
            Emergency Response
          </h2>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            From detection to rescue — see how SafeFly's intelligent response
            system works in critical moments.
          </p>
        </div>

        {/* carousel */}
        <div
          ref={containerRef}
          className="relative w-full mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-pinky-50 overflow-visible"
        >
          <div className="relative min-h-[120px] sm:min-h-[140px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={cardData[index].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-lg grid place-items-center flex-shrink-0 ${cardData[index].accent}`}
                  >
                    {React.cloneElement(cardData[index].icon, {
                      className: "w-6 h-6",
                      "aria-hidden": true,
                    })}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-pinky-800">
                          {cardData[index].title}
                        </h3>
                        <div className="text-xs text-gray-400 mt-1">
                          Step {index + 1} of {count}
                        </div>
                      </div>

                      <div className="hidden md:flex items-center justify-center w-12 h-12 text-2xl text-gray-200 font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-600">
                      {cardData[index].subtitle}
                    </p>
                    <div className="mt-3 text-xs text-pinky-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pinky-500 inline-block" />
                      <span>{cardData[index].note}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="mt-[55%] md:mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => userAction(prev)}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-gray-200 shadow-sm bg-white flex items-center justify-center"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="w-9 h-9 border border-gray-200 shadow-sm bg-white flex items-center justify-center"
              title={paused ? "Resume autoplay" : "Pause autoplay"}
            >
              {paused ? (
                <FiPlay className="w-4 h-4" />
              ) : (
                <FiPause className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => userAction(next)}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-gray-200 shadow-sm bg-white flex items-center justify-center"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center gap-2 justify-center">
            {cardData.map((c, i) => (
              <button
                key={c.id}
                onClick={() => userAction(() => go(i, i > index ? 1 : -1))}
                aria-label={`Show ${c.title}`}
                className={`w-2.5 h-2.5 rounded-full transition-transform ${
                  i === index ? "scale-110 bg-pinky-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold text-gray-800">Help Arrives Faster</h4>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-red-500">12 min</div>
              <div className="text-xs sm:text-sm text-gray-400">Average response time without SafeFly</div>
            </div>

            <div className="text-2xl text-gray-300">→</div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-500">&lt;4 min</div>
              <div className="text-xs sm:text-sm text-gray-400">With SafeFly</div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto">
            Average emergency response time reduced from 12 minutes to under 4 minutes with SafeFly.
          </p>
        </div>

        {/* image + CTA */}
        <div className="mt-12 bg-white/60 border border-pinky-50 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6">
          <img
            src={illustrationSrc}
            alt="Emergency Illustration"
            className="w-full lg:w-[22%] rounded-lg shadow-xl object-cover"
            style={{ maxHeight: 360 }}
          />

          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-heading text-pinky-800">Faster Rescue, Safer Outcome</h3>
            <p className="mt-3 text-sm text-gray-600">
              SafeFly coordinates sensors, mobile apps, contacts and emergency responders to shorten the time between detection and help. Customize escalation rules, live-share location, and configure trusted contacts for instant action.
            </p>

            <div className="mt-4 flex items-center gap-3 justify-center lg:justify-start">
              <button className="text-[10px] md:text-md px-5 py-2 rounded-full bg-pinky-500 text-white font-semibold shadow-md hover:bg-pinky-600 transition">
                Learn How It Works
              </button>
              <button className=" text-[10px] md:text-md px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white">
                View Data & Stats
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
}
