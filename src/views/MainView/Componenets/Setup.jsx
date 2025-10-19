import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Zap,
  UserPlus,
  MapPin,
  FileText,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * MobileFeatureHeroIphone
 * - iPhone-like mockup (notch, speaker, camera, home indicator)
 * - Responsive layout: phone left, features right on desktop; stacked on mobile
 * - Mobile: shows a single feature at a time (auto-advance 5s)
 * - Uses Tailwind + small CSS for device styling
 */

export default function MobileFeatureHeroIphone() {
  const SLIDE_INTERVAL_MS = 5000; // 5s per slide
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const features = [
    {
      key: "easy-setup",
      title: "Easy Setup",
      subtitle: "Connect your SafeFly band in seconds with Bluetooth pairing",
      bullets: ["Bluetooth 5.0", "Auto-connect", "Device management"],
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-pinky-100 text-pinky-600",
    },
    {
      key: "emergency-contacts",
      title: "Emergency Contacts",
      subtitle: "Add trusted contacts who receive alerts during emergencies",
      bullets: ["Unlimited contacts", "Priority levels", "Quick access"],
      icon: <UserPlus className="w-5 h-5" />,
      color: "bg-pinky-50 text-pinky-500",
    },
    {
      key: "live-tracking",
      title: "Live-Location Tracking",
      subtitle: "Real-time GPS tracking with indoor positioning support",
      bullets: ["GPS + WiFi", "Indoor mapping", "Location history"],
      icon: <MapPin className="w-5 h-5" />,
      color: "bg-pinky-100 text-pinky-600",
    },
    {
      key: "incident-log",
      title: "Incident Log",
      subtitle: "Complete timeline of safety events and responses",
      bullets: ["Event timeline", "Response times", "Export reports"],
      icon: <FileText className="w-5 h-5" />,
      color: "bg-pinky-50 text-pinky-500",
    },
    {
      key: "privacy-controls",
      title: "Privacy Controls",
      subtitle: "Advanced privacy settings with end-to-end encryption",
      bullets: ["Data encryption", "Privacy modes", "GDPR compliant"],
      icon: <Lock className="w-5 h-5" />,
      color: "bg-pinky-100 text-pinky-600",
    },
  ];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % features.length);
  }, [features.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + features.length) % features.length);
  }, [features.length]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % features.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const phoneAnim = {
    enter: { opacity: 0, y: 12 },
    center: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="w-full bg-gradient-to-b rounded-xl from-pinky-100 via-cotton to-pinky-200 py-16 px-4 md:px-8 lg:px-12"
      aria-labelledby="mobile-hero-heading"
    >
      {/* Small CSS for iPhone details */}
      <style>{`
        /* Device frame shadow and glossy highlight */
        .iphone-frame {
          box-shadow:
            0 10px 30px rgba(8, 15, 30, 0.08),
            inset 0 1px 0 rgba(255,255,255,0.02);
          border: 1px solid rgba(0,0,0,0.15);
        }
        /* Notch styling */
        .iphone-notch {
          width: 42%;
          max-width: 170px;
          height: 28px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55));
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        /* camera dot */
        .iphone-camera {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.6));
          box-shadow: 0 1px 2px rgba(0,0,0,0.6) inset;
        }
        /* speaker bar inside notch */
        .iphone-speaker {
          width: 36%;
          height: 6px;
          border-radius: 4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
        }
        /* home indicator */
        .iphone-home {
          width: 36%;
          max-width: 120px;
          height: 6px;
          border-radius: 999px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25));
 

        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <p className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-300 text-pinky-700">
            Mobile App
          </p>
          <h2
            id="mobile-hero-heading"
            className="mt-4 text-3xl md:text-4xl font-heading text-pinky-900"
          >
            Complete Control in{" "}
            <span className="text-pinky-500">Your Pocket</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            The SafeFly companion app puts you in control with intuitive
            features and real-time monitoring.
          </p>
        </header>

        {/* Main layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* PHONE  */}
          <article className="flex items-center md:ml-16">
            <div className="relative">
              {/* outer frame */}
              <div
                className="iphone-frame relative rounded-[44px] bg-red-200 text-white  p-3 flex items-center justify-center    "
                style={{ width: "16rem", maxWidth: "22rem" }}
                aria-hidden="false"
              >
                {/* glossy border highlight */}
                <div
                  className="absolute inset-0 rounded-[40px] pointer-events-none"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
                />

                {/* inner screen */}
                <div
                  className="relative bg-white rounded-3xl w-full h-[26rem] sm:h-[28rem] md:h-[28rem] overflow-hidden"
                  style={{ maxWidth: "18rem" }}
                >
                  {/* top thin bezel with notch */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center items-center pt-3 z-20">
                    <div className="iphone-notch flex items-center justify-between px-3">
                      <div className="iphone-camera" />
                      <div className="iphone-speaker" />
                      <div style={{ width: 4 }} />
                    </div>
                  </div>
                  {/* content area */}
                  <div className="p-4 md:pt-14 h-full flex items-center justify-center">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        key={features[index].key}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={phoneAnim}
                        className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
                        aria-live="polite"
                      >
                        <div className="rounded-xl p-4 bg-gradient-to-b from-white to-pinky-50 shadow-inner border border-pinky-50 w-full text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div
                              className={`flex items-center justify-center w-12 h-12 rounded-lg ${features[index].color}`}
                            >
                              {features[index].icon}
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-pinky-800">
                                {features[index].title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {features[index].subtitle}
                              </p>
                            </div>
                          </div>

                          <ul className="mt-5 space-y-2 text-sm text-gray-900 text-left">
                            {features[index].bullets.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 justify-start"
                              >
                                <span className="w-2 h-2 rounded-full bg-pinky-300 mt-1" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex items-center justify-center gap-2">
                            {features.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setIndex(dotIdx)}
                                aria-label={`Show ${features[dotIdx].title}`}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                  dotIdx === index
                                    ? "scale-110 bg-pinky-500"
                                    : "bg-pinky-200 hover:bg-pinky-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* home indicator area */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <div className="iphone-home" />
                  </div>
                </div>
              </div>

              {/* nav arrows (desktop only) */}
              <button
                onClick={prev}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow-sm"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={next}
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow-sm"
                aria-label="Next feature"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </article>

          {/* FEATURE LIST */}
          <nav
            className="order-first lg:order-last mt-7"
            aria-label="App features"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <ul className="space-y-4">
              {features.map((f, i) => {
                const active = i === index;
                return (
                  <li key={f.key}>
                    <button
                      onClick={() => setIndex(i)}
                      className={`w-full text-left group flex items-start gap-4 p-4 rounded-2xl transition-shadow border ${
                        active
                          ? "bg-white shadow-lg border-pinky-100"
                          : "bg-white/60 border-transparent hover:shadow-md"
                      }`}
                      aria-pressed={active}
                    >
                      <div
                        className={`flex-shrink-0 rounded-lg p-3 ${f.color} group-hover:scale-105 transition-transform`}
                        aria-hidden="true"
                      >
                        {f.icon}
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-sm md:text-base ${
                            active ? "text-pinky-800" : "text-pinky-700"
                          }`}
                        >
                          {f.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                          {f.subtitle}
                        </p>

                        <div className="mt-3 hidden md:block">
                          <ul className="text-sm text-gray-600 grid grid-cols-1 gap-1">
                            {f.bullets.map((b, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    active ? "bg-pinky-500" : "bg-pinky-200"
                                  }`}
                                />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center">
                        <ChevronRight
                          className={`w-4 h-4 ${
                            active ? "text-pinky-500" : "text-gray-300"
                          }`}
                        />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Download buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-pinky-100 bg-white text-sm text-pinky-700 shadow-sm"
                role="button"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-pinky-100 bg-white text-sm text-pinky-700 shadow-sm"
                role="button"
              >
                Download for Android
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
