import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cotton to-white text-gray-800 font-body">
      {/* MAIN FOOTER SECTIONS */}
     <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
  {/* BRAND INFO */}
  <article className="md:col-span-1">
    <header className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pinky-400 to-pinky-600 flex items-center justify-center text-white font-bold shadow-md">
        S
      </div>
      <h2 className="text-xl font-playfair text-gray-900">SafeFly</h2>
    </header>

    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
      Feel safe. Move free. SafeFly is your personal safety companion,
      always watching over you.
    </p>

    {/* SUBSCRIBE FORM */}
    <form
      className="mt-6 flex flex-wrap items-center gap-3"
      aria-label="Subscribe to SafeFly updates"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-40 sm:w-48 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pinky-300 text-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm bg-pinky-500 text-white rounded-md hover:bg-pinky-600 transition-all shadow-md"
      >
        Subscribe
      </button>
    </form>

    {/* SOCIAL LINKS */}
    <nav
      className="mt-6 flex gap-4 text-pinky-500"
      aria-label="Social media links"
    >
      <Link to="#" aria-label="Facebook" className="hover:text-[#1877F2] hover:scale-110 transition-all"><FaFacebookF /></Link>
      <Link to="#" aria-label="Twitter" className="hover:text-[#1DA1F2] hover:scale-110 transition-all"><FaTwitter /></Link>
      <Link to="#" aria-label="Instagram" className="hover:text-[#E4405F] hover:scale-110 transition-all"><FaInstagram /></Link>
      <Link to="#" aria-label="LinkedIn" className="hover:text-[#0A66C2] hover:scale-110 transition-all"><FaLinkedinIn /></Link>
      <Link to="#" aria-label="YouTube" className="hover:text-[#FF0000] hover:scale-110 transition-all"><FaYoutube /></Link>
    </nav>
  </article>

  {/* RIGHT SIDE SECTIONS */}
  <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* PRODUCT */}
    <nav aria-label="Product links">
      <h3 className="font-semibold text-gray-900 mb-3 font-playfair">Product</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><Link to="/feature" className="hover:text-pinky-500">Features</Link></li>
        <li><Link to="/how-it-works" className="hover:text-pinky-500">How It Works</Link></li>
        <li><Link to="/design" className="hover:text-pinky-500">Design</Link></li>
        <li><Link to="/security" className="hover:text-pinky-500">Security</Link></li>
        <li><Link to="/faq" className="hover:text-pinky-500">FAQ</Link></li>
      </ul>
    </nav>

    {/* COMPANY */}
    <nav aria-label="Company links">
      <h3 className="font-semibold text-gray-900 mb-3 font-playfair">Company</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><Link to="/about" className="hover:text-pinky-500">About Us</Link></li>
        <li><Link to="/careers" className="hover:text-pinky-500">Careers</Link></li>
        <li><Link to="/blog" className="hover:text-pinky-500">Blog</Link></li>
        <li><Link to="/press" className="hover:text-pinky-500">Press</Link></li>
        <li><Link to="/partners" className="hover:text-pinky-500">Partners</Link></li>
      </ul>
    </nav>

    {/* SUPPORT */}
    <nav aria-label="Support links">
      <h3 className="font-semibold text-gray-900 mb-3 font-playfair">Support</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><Link to="/help" className="hover:text-pinky-500">Help Center</Link></li>
        <li><Link to="/contact" className="hover:text-pinky-500">Contact Us</Link></li>
        <li><Link to="/warranty" className="hover:text-pinky-500">Warranty</Link></li>
        <li><Link to="/returns" className="hover:text-pinky-500">Returns</Link></li>
        <li><Link to="/shipping" className="hover:text-pinky-500">Shipping</Link></li>
      </ul>
    </nav>

    {/* LEGAL */}
    <nav aria-label="Legal links">
      <h3 className="font-semibold text-gray-900 mb-3 font-playfair">Legal</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><Link to="/privacy" className="hover:text-pinky-500">Privacy Policy</Link></li>
        <li><Link to="/terms" className="hover:text-pinky-500">Terms of Service</Link></li>
        <li><Link to="/cookies" className="hover:text-pinky-500">Cookie Policy</Link></li>
        <li><Link to="/gdpr" className="hover:text-pinky-500">GDPR</Link></li>
        <li><Link to="/accessibility" className="hover:text-pinky-500">Accessibility</Link></li>
      </ul>
    </nav>

  </div>
</section>


      {/* CONTACT + COPYRIGHT */}
      <address className="not-italic border-t border-cotton mt-6 py-6 text-center text-sm text-gray-500">
        <section className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <div className="flex items-center gap-2">
            <FiPhone className="text-pinky-500" />
            <span>1-800-SAFEFLY</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-pinky-500" />
            <Link to="/contact" className="hover:text-pinky-500">
              help@safefly.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-pinky-500" />
            <span>San Francisco, CA</span>
          </div>
        </section>

        <p className="mt-4 font-playfair text-gray-600">
          © 2025 SafeFly Inc. All rights reserved.
        </p>
        <p className="mt-1 text-gray-400 flex justify-center items-center gap-1">
          Made with <FaHeart className="text-pinky-500" /> for your safety
        </p>
      </address>
    </footer>
  );
}
