import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FishLoader from "../Components/FishLoader";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

// Data fiktif untuk halaman Tentang Kami
const aboutData = {
    established: "2018",
    location: "Desa Curug, Kabupaten [Nama Kota]",
    anggota: "50+ Pembudidaya Aktif",
};

// Nilai Inti (Core Values)
const coreValues = [
    { 
        title: "Kualitas Unggul", 
        desc: "Kami menjamin ikan hias yang sehat, bebas penyakit, dan siap untuk dipelihara.", 
        icon: "✨" 
    },
    { 
        title: "Inovasi Berkelanjutan", 
        desc: "Menerapkan metode budidaya modern yang ramah lingkungan dan efisien.", 
        icon: "🌱" 
    },
    { 
        title: "Kesejahteraan Komunitas", 
        desc: "Fokus pada pemberdayaan anggota Pokdakan untuk mencapai kemandirian ekonomi.", 
        icon: "🤝" 
    },
    { 
        title: "Integritas & Transparansi", 
        desc: "Menjaga kepercayaan mitra dengan proses budidaya yang terbuka.", 
        icon: "🔒" 
    },
];

export default function AboutPage() {
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Loader selama 3 detik
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
      }, []);

    if (loading) return <FishLoader />;

    // Animasi konsisten yang sama seperti Landing Page
    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    
    // Animasi untuk list/staggered items
    const itemFade = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            {/* 1. Header Tentang Kami (Semi-Hero) */}
            <motion.header
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="pt-40 pb-20 bg-teal-700 text-white text-center shadow-lg"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-lg font-medium mb-3 uppercase tracking-widest text-teal-200">
                        Siapa Kami
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        Mengenal Pokdakan <span className="text-teal-300">Nusantara</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto font-light text-teal-100">
                        Lebih dari sekadar kelompok, kami adalah keluarga pembudidaya yang bersemangat melestarikan dan mengembangkan potensi ikan hias Indonesia.
                    </p>
                </div>
            </motion.header>

            {/* 2. Sejarah Singkat (Our Story) */}
            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-24 px-6 md:px-12 bg-white"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="md:order-2">
                        <img 
                            src="/img/pokdakan2.jpg" // Ganti dengan foto tim/lokasi
                            alt="Tim Pokdakan Nusantara"
                            className="rounded-3xl shadow-2xl ring-8 ring-teal-50 object-cover w-full h-96"
                        />
                    </div>
                    <div className="md:order-1 text-gray-800">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-4 border-teal-500 pl-4">
                            Perjalanan Kami
                        </h2>
                        <p className="text-xl mb-4 leading-relaxed text-gray-600">
                            Didirikan pada tahun {aboutData.established} di Desa Curug, Pokdakan Nusantara berawal dari inisiatif kecil untuk menanggulangi kesulitan pemasaran budidaya ikan hias. 
                        </p>
                        <p className="text-xl leading-relaxed text-gray-600">
                            Kami fokus pada budidaya ikan Tetra (Neon, Cardinal, Rummy Nose) karena potensi pasarnya yang besar dan keindahan visualnya. Kini, kami telah berkembang menjadi kelompok yang menaungi lebih dari {aboutData.anggota} dengan standar kualitas budidaya terbaik.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* 3. Visi & Misi (Revisi: Lebih visual dengan list) */}
            <section className="py-24 px-6 md:px-12 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-center mb-16 text-white border-b-4 border-teal-500 inline-block pb-2"
                    >
                        Visi & Misi Kami
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                            <h3 className="text-3xl font-bold mb-4 text-teal-400 flex items-center gap-3">
                                <span className="text-4xl">👁️</span> Visi
                            </h3>
                            <p className="text-xl text-gray-300">
                                Menjadi sentra pembudidaya ikan hias Tetra terbaik di Indonesia, berfokus pada kualitas ekspor dan pemberdayaan masyarakat lokal.
                            </p>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                            <h3 className="text-3xl font-bold mb-4 text-teal-400 flex items-center gap-3">
                                <span className="text-4xl">🎯</span> Misi
                            </h3>
                            <ul className="space-y-3 text-lg text-gray-300">
                                <motion.li variants={itemFade}>
                                    <span className="text-teal-400 font-bold mr-2">1.</span> Mengembangkan teknik budidaya yang efisien dan berkelanjutan.
                                </motion.li>
                                <motion.li variants={itemFade} transition={{ delay: 0.1 }}>
                                    <span className="text-teal-400 font-bold mr-2">2.</span> Membangun jaringan pemasaran yang luas, domestik maupun internasional.
                                </motion.li>
                                <motion.li variants={itemFade} transition={{ delay: 0.2 }}>
                                    <span className="text-teal-400 font-bold mr-2">3.</span> Meningkatkan kesejahteraan anggota melalui pelatihan dan pendampingan.
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 4. Nilai Inti (Core Values) */}
            <section className="py-24 px-6 md:px-12 bg-gray-50 text-center">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-teal-600 mb-4"
                    >
                        Pilar Kekuatan Kami
                    </motion.h2>
                    <p className="text-xl text-gray-600 mb-16">
                        Nilai-nilai yang kami pegang teguh dalam setiap kolam budidaya.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }} // Shadow on hover
                                className="p-8 bg-white rounded-2xl shadow-xl border-t-4 border-teal-500 transition duration-300"
                            >
                                <div className="text-5xl mb-4 text-teal-600">{value.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-600 text-base">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Peta Lokasi (Tambahkan link Google Maps di sini) */}
            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-24 bg-teal-600 text-white text-center"
            >
                <h2 className="text-4xl font-extrabold mb-4">
                    Kunjungi Lokasi Budidaya Kami
                </h2>
                <p className="text-xl mb-8 font-light max-w-3xl mx-auto">
                    Pokdakan Nusantara berlokasi di {aboutData.location}. 
                    Kami terbuka untuk kunjungan mitra dan edukasi budidaya.
                </p>
                <a
                    href="#" // Ganti dengan link Google Maps Desa Curug
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                >
                    Lihat di Google Maps 🗺️
                </a>
            </motion.section>
            
            <Footer/>
        </div>
    );
}