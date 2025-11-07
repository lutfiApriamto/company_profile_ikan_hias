import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Anda bisa menggunakan ikon dari react-icons atau emoji
// Contoh: import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Data link navigasi
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Tentang Kami", href: "/tentang" },
        { name: "Produk", href: "/produk" },
        { name: "Kontak", href: "/kontak" },
    ];

    // Animasi untuk menu mobile (dropdown)
    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    };

    return (
        // Navbar Utama - Sticky di atas, Dark Background
        <nav className="sticky top-0 z-40 w-full bg-gray-900 shadow-xl border-b border-teal-700/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo/Brand */}
                    <motion.a 
                        href="/" 
                        className="text-2xl font-extrabold text-white flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        🐠 Pokdakan <span className="text-teal-400">Curug</span>
                    </motion.a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-teal-400 font-medium transition duration-300 relative group text-lg"
                                whileHover={{ y: -2 }} // Animasi hover ringan
                            >
                                {link.name}
                                {/* Garis bawah animasi */}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Tombol Kontak (CTA di Desktop) */}
                    <div className="hidden md:block">
                        <motion.a
                            href="/kontak"
                            className="px-5 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-500 transition duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hubungi Kami
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-teal-400 focus:outline-none p-2"
                            aria-label="Toggle Menu"
                        >
                            <span className="text-3xl">
                                {isOpen ? '✕' : '☰'} 
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden bg-gray-800 border-t border-teal-700/50 absolute w-full"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white transition duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                             {/* CTA Mobile */}
                             <a
                                href="/kontak"
                                className="block px-3 py-2 rounded-md text-base font-bold text-white bg-teal-600 hover:bg-teal-500 transition duration-200 mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}