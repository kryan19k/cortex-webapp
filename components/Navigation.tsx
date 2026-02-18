"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Modes", href: "#modes" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Docs", href: "#docs" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#08080f]/95 backdrop-blur-md border-b border-[#7c3aed]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-9 h-9 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#7c3aed]/30 blur-xl rounded-full" />
                <Brain className="w-8 h-8 text-[#7c3aed] relative z-10" />
              </motion.div>
              <span className="text-xl font-bold tracking-widest text-white uppercase">
                Cortex
              </span>
              <span className="hidden sm:block text-xs text-[#6b6b8a] border border-[#1e1e30] px-2 py-0.5 rounded tracking-wider">
                UE5
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm text-[#6b6b8a] hover:text-white transition-colors duration-200 group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7c3aed] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://www.fab.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 bg-[#7c3aed] text-white text-sm font-semibold rounded hover:bg-[#6d28d9] transition-colors duration-200"
              >
                Get on Fab
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#7c3aed]"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0e0e1a] border-l border-[#1e1e30] p-8 pt-24">
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base text-[#6b6b8a] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href="https://www.fab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-4 px-6 py-3 bg-[#7c3aed] text-white font-semibold text-center rounded"
                >
                  Get on Fab
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
