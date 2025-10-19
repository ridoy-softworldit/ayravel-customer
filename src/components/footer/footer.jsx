"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/featured/auth/authSlice";

export default function Footer() {
  const appStoreUrl =
    "https://res.cloudinary.com/dtges64tg/image/upload/w_120,h_40,f_auto,q_auto/v1759399126/appstore_waa00a.png";
  const googlePlayUrl =
    "https://res.cloudinary.com/dtges64tg/image/upload/w_120,h_40,f_auto,q_auto/v1759399057/googleplay_kxh8bu.png";

  const currentUser = useAppSelector(selectCurrentUser);
  const isLoggedIn = Boolean(currentUser?.id);
  const sellerHref = "https://AYraveL-admin-panel.vercel.app/auth/register";

  return (
    <footer className="bg-accent py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-1">AYraveL</h2>
              <p className="text-sm text-secondary-600 mb-6">
                Your trusted fashion destination
              </p>

              {/* Social Media Icons */}
              <div className="space-y-3 mb-6">
                <div className="text-sm font-medium text-secondary mb-2">
                  Follow Us:
                </div>
                <div className="space-y-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61581642407752&sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-3 h-3 text-white" />
                    </div>
                     AYraveL Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/@AYraveL-c4w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary-600 hover:text-red-600 transition-colors"
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="w-3 h-3 text-white" />
                    </div>
                     AYraveL YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/ayshakhnm2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary-600 hover:text-pink-600 transition-colors"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-3 h-3 text-white" />
                    </div>
                     AYraveL Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aysha-khanam-7b4794366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary-600 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                     AYraveL LinkedIn
                  </a>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex gap-3">
                <Image
                  src={appStoreUrl}
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="rounded"
                />
                <Image
                  src={googlePlayUrl}
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <Link href="/privacy-trust" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/faqs-page" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <a
                  href="mailto:ayravelmanager@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  ayravelmanager@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <svg
                    className="w-4 h-4 text-secondary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +8801909008004
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <svg
                    className="w-4 h-4 text-secondary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Mirpur, Dhaka, Bangladesh
                </div>
              </li>

            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white border border-neutral rounded p-2 flex items-center justify-center h-8">
                  <svg className="h-5 w-8" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="4" fill="#1A1F71"/>
                    <text x="20" y="15" textAnchor="middle" className="fill-white text-xs font-bold">VISA</text>
                  </svg>
                </div>
                <div className="bg-white border border-neutral rounded p-2 flex items-center justify-center h-8">
                  <svg className="h-5 w-8" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="4" fill="#EB001B"/>
                    <circle cx="15" cy="12" r="7" fill="#FF5F00"/>
                    <circle cx="25" cy="12" r="7" fill="#F79E1B"/>
                  </svg>
                </div>
                <div className="bg-white border border-neutral rounded p-2 flex items-center justify-center h-8">
                  <svg className="h-5 w-8" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="4" fill="#E2136E"/>
                    <text x="20" y="15" textAnchor="middle" className="fill-white text-xs font-bold">bKash</text>
                  </svg>
                </div>
                <div className="bg-white border border-neutral rounded p-2 flex items-center justify-center h-8">
                  <svg className="h-5 w-8" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="4" fill="#F47920"/>
                    <text x="20" y="15" textAnchor="middle" className="fill-white text-xs font-bold">Nagad</text>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-secondary-600 mt-2">Secure payment processing</p>
            </div>
          </div>

          {/* Our Information Section */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <Link href="/product-listing" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-secondary-500 mb-4">
            © {new Date().getFullYear()} AYraveL. All rights reserved - Design & Developed by <span className="text-primary font-medium">WebQ Team</span> 
          </p>
        </div>
      </div>
    </footer>
  );
}