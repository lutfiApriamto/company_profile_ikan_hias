import { motion } from "framer-motion";
import { useState } from "react";
// Asumsi Anda menggunakan path yang sama seperti di komponen sebelumnya
// import products from '../data/data.json'; 

export default function ProductDetailModal({ isOpen, onClose, product }) {
    if (!isOpen) return null;

    // Nomor WhatsApp dan Pesan
    const whatsappNumber = "6281382215564";
    const whatsappMessage = `Halo Pokdakan Nusantara, saya tertarik untuk membeli ikan ${product.nama}. Mohon info harga dan ketersediaan ukurannya. Terima kasih!`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // State untuk gambar utama di dalam modal
    const [mainImage, setMainImage] = useState(product.gambar[0]);
    
    // Animasi Modal
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        // Overlay
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
        >
            {/* Modal Container */}
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutupnya
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold p-2 z-10"
                >
                    &times;
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Kiri: Gambar dan Galeri */}
                    <div className="p-4 bg-gray-100 rounded-l-3xl">
                        <motion.img
                            key={mainImage} // Key untuk memicu animasi saat gambar berubah
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            src={mainImage}
                            alt={product.nama}
                            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
                        />
                        {/* Galeri Gambar Mini */}
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {product.gambar.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`${product.nama} image ${index + 1}`}
                                    onClick={() => setMainImage(imgSrc)}
                                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition border-2 ${mainImage === imgSrc ? 'border-teal-500 ring-2 ring-teal-300' : 'border-transparent hover:border-teal-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Kanan: Deskripsi dan Detail */}
                    <div className="p-8">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{product.nama}</h2>
                        <h4 className="text-xl font-semibold text-teal-600 mb-6">
                            Ikan Hias Terbaik dari Pokdakan Nusantara
                        </h4>

                        {/* Deskripsi */}
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {product.deskripsi}
                        </p>

                        {/* Ciri Khas */}
                        <div className="mb-6 border-l-4 border-teal-500 pl-4">
                            <h5 className="text-xl font-bold text-gray-800 mb-3">Ciri Khas & Keunikan</h5>
                            <ul className="text-gray-700 space-y-2 text-sm">
                                {product.ciri.map((ciri, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-teal-500 font-bold mr-2 mt-1">•</span>
                                        <span>{ciri}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Ukuran Tersedia */}
                        <div className="mb-8">
                            <h5 className="text-xl font-bold text-gray-800 mb-3">Ukuran Tersedia (Stok Pokdakan)</h5>
                            <div className="flex flex-wrap gap-2">
                                {product.ukuran.map((size, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-1 bg-teal-100 text-teal-700 font-semibold rounded-full border border-teal-300 text-sm"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tombol Beli (CTA WhatsApp) */}
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block w-full text-center py-3 bg-green-600 text-white font-bold rounded-lg text-xl hover:bg-green-700 transition duration-300 shadow-xl shadow-green-500/50"
                        >
                            Beli Sekarang Via WhatsApp 🛒
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}