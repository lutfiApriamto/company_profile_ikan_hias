import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import FishLoader from "../Components/FishLoader";
import Navbar from "../Components/Navbar";
// Anda mungkin perlu menambahkan ikon dari library seperti react-icons
// Contoh: import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

// Data kontak fiktif
const contactInfo = {
    address: "Desa Curug, Kabupaten Bogor, Jawa Barat",
    phone: "+62 813-8221-5564 (Admin Pokdakan)",
    email: "curugpokdakan@email.com",
    operationHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
    mapLink: "https://maps.app.goo.gl/NZ4moQ3hsaBwZvTn9" // Ganti dengan link Google Maps yang sebenarnya
};

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Loader selama 3 detik
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <FishLoader />;
    
    // State dan fungsi handling form bisa ditambahkan di sini, misalnya handleSubmit
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Animasi konsisten
    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    
    // Animasi untuk list/staggered items (untuk Detail Kontak)
    const itemFade = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            {/* 1. Header Kontak */}
            <motion.header
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="pt-32 pb-20 bg-gray-900 text-white text-center shadow-xl"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-lg font-medium mb-3 uppercase tracking-widest text-teal-400">
                        Hubungi Kami
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        Mari Berkolaborasi!
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
                        Kami siap membantu kebutuhan ikan hias, kemitraan, dan konsultasi budidaya Anda.
                    </p>
                </div>
            </motion.header>

            {/* 2. Section Utama (Formulir dan Detail) */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Kiri: Formulir Kontak */}
                        <motion.div 
                            variants={fadeIn} 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-teal-500 pl-4 mb-8">
                                Kirim Pesan Cepat
                            </h2>
                            <form className="space-y-6">
                                {/* Input Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nama Lengkap Anda"
                                    onChange={handleChange}
                                    className="w-full p-3 border-b-2 border-gray-300 focus:border-teal-500 focus:ring-0 outline-none transition duration-300 text-lg rounded-t-lg bg-gray-50"
                                />
                                
                                {/* Input Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Alamat Email"
                                    onChange={handleChange}
                                    className="w-full p-3 border-b-2 border-gray-300 focus:border-teal-500 focus:ring-0 outline-none transition duration-300 text-lg rounded-t-lg bg-gray-50"
                                />

                                {/* Input Subject */}
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subjek (Contoh: Pemesanan Cardinal Tetra)"
                                    onChange={handleChange}
                                    className="w-full p-3 border-b-2 border-gray-300 focus:border-teal-500 focus:ring-0 outline-none transition duration-300 text-lg rounded-t-lg bg-gray-50"
                                />

                                {/* Textarea Message */}
                                <textarea
                                    name="message"
                                    placeholder="Pesan Anda..."
                                    rows="4"
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-300 focus:border-teal-500 focus:ring-0 outline-none transition duration-300 text-lg rounded-lg bg-gray-50"
                                />

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg text-xl hover:bg-teal-700 transition duration-300 shadow-lg shadow-teal-500/50"
                                >
                                    Kirim Pesan
                                </motion.button>
                            </form>
                        </motion.div>
                        
                        {/* Kanan: Detail Kontak & Info */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ staggerChildren: 0.2 }}
                            className="bg-teal-50 p-8 rounded-xl shadow-inner space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-teal-800 border-b pb-3 border-teal-200">
                                Informasi Kontak
                            </h3>
                            
                            {/* Alamat */}
                            <motion.div variants={itemFade} className="flex items-start space-x-4">
                                <span className="text-3xl text-teal-600 mt-1">📍</span>
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Alamat Utama</p>
                                    <p className="text-gray-700">{contactInfo.address}</p>
                                </div>
                            </motion.div>

                            {/* Telepon */}
                            <motion.div variants={itemFade} className="flex items-start space-x-4">
                                <span className="text-3xl text-teal-600 mt-1">📞</span>
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Telepon / WhatsApp</p>
                                    <a href={`https://wa.me/6281382215564`} target="_blank" className="text-teal-600 hover:underline">{contactInfo.phone}</a>
                                </div>
                            </motion.div>

                            {/* Jam Operasi */}
                            <motion.div variants={itemFade} className="flex items-start space-x-4">
                                <span className="text-3xl text-teal-600 mt-1">⏰</span>
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Jam Operasional</p>
                                    <p className="text-gray-700">{contactInfo.operationHours}</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 3. Peta Lokasi (Embed/Link) */}
            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pb-24 px-6 md:px-12"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Lokasi Kami di Desa Curug</h2>
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                        {/* Contoh Iframe Embed Google Maps - Ganti src dengan embed code Pokdakan Anda */}
                        <iframe 
                            src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4569.082148391618!2d106.73229467499178!3d-6.3896143936008505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjMnMjIuNiJTIDEwNsKwNDQnMDUuNSJF!5e1!3m2!1sid!2sid!4v1762530880610!5m2!1sid!2sid`} 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Google Maps Lokasi Pokdakan curug"
                        ></iframe>
                    </div>
                    <p className="text-center mt-4 text-gray-600">
                        Klik <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">di sini</a> untuk navigasi langsung ke lokasi kami.
                    </p>
                </div>
            </motion.section>

            {/* Catatan: Footer akan berada di Layout utama, tidak perlu diulang di sini */}
            <Footer/>
        </div>
    );
}