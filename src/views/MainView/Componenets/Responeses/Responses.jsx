// EmergencyResources.jsx
import React from "react";

export default function EmergencyResources() {
  const items = [
    {
      title: "National Emergency",
      number: "911",
      note: "US & Canada",
      action: "tel:911",
    },
    {
      title: "European Emergency",
      number: "112",
      note: "Europe",
      action: "tel:112",
    },
    {
      title: "Domestic Violence Hotline",
      number: "1-800-799-7233",
      note: "US",
      action: "tel:+18007997233",
    },
    {
      title: "Crisis Text Line",
      number: "Text HOME to 741741",
      note: "US & Canada",
      action: "sms:741741?body=HOME",
    },
  ];

  return (
    <section
      aria-labelledby="emergency-resources-heading"
      className="bg-white"
    >
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center">
          <h2
            id="emergency-resources-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900"
          >
            <span className="inline-flex items-center mr-2" aria-hidden>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pinky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                />
              </svg>
            </span>
            Emergency Resources
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            If you're in immediate danger, contact emergency services right away.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-3"
            >
              <h3 className="text-sm font-medium text-gray-600">{it.title}</h3>

              <a
                href={it.action}
                className="text-pinky-600 font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl hover:text-pinky-700"
                aria-label={`${it.title} — ${it.number}`}
              >
                {it.number}
              </a>

              <span className="text-xs text-gray-400">{it.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
