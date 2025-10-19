import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Feature", path: "/feature " },
    { name: "How It Work", path: "/work" },
    { name: "Design", path: "/Design" },
    { name: "Security", path: "/Security" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center font-body backdrop-blur-md"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,240,245,0.85) 0%, rgba(255,220,235,0.9) 50%, rgba(255,200,225,0.95) 100%)",
      }}
    >
      <div className="w-[95%] max-w-7xl pt-4">
        <div className="rounded-full bg-pinky-100/70 border border-pinky-300 shadow-[0_0_25px_rgba(255,105,180,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,182,193,0.5)]">
          <div className="flex items-center justify-between px-6 py-2">
            {/* LEFT: Logo */}
            <div className="flex items-center">
              <img src={logo} alt="SafeFly" className="h-12 w-auto" />
            </div>

            {/* CENTER NAV (Desktop) */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6 text-xs md:text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-pinky-800 hover:text-pinky-600 border-none transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-1 rounded-full bg-gradient-to-r from-pinky-400 to-pinky-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <span>Pre-Order Now</span>
                <span className="text-lg">→</span>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md text-pinky-700 hover:bg-pinky-200 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {isOpen && (
          <div className="mt-2 rounded-lg bg-pinky-100/90 border border-pinky-300 shadow-lg p-4 md:hidden backdrop-blur-md transition-all duration-300">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 rounded-md text-pinky-800 hover:bg-pinky-200/70 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-6 py-1 rounded-full  bg-gradient-to-r from-pinky-400 to-pinky-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <span>Pre-Order Now</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
