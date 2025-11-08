import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import data dari file JSON Anda. Pastikan path-nya benar relatif terhadap komponen ini.
import products from '../data/data.json'; 
import ProductDetailModal from '../Components/ProductDetailModal'; // Komponen Modal akan kita buat
import Footer from "../Components/Footer";
import FishLoader from "../Components/FishLoader";
import Navbar from "../Components/Navbar";

export default function ProductPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Loader selama 3 detik
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);

    if (loading) return <FishLoader />;

    // Animasi konsisten
    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const cardColors = {
        "Neon Tetra": "border-blue-400",
        "Cardinal Tetra": "border-red-400",
        "Rummy Nose Tetra": "border-orange-400",
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar/>
            {/* Header Produk */}
            <motion.header
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="pt-32 pb-20 bg-gray-900 text-white text-center shadow-xl border-b border-teal-700"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-lg font-medium mb-3 uppercase tracking-widest text-teal-400">
                        Ikan Hias Premium
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        Katalog Produk Unggulan
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto font-light text-gray-400">
                        Jelajahi Neon, Cardinal, dan Rummy Nose Tetra kualitas terbaik, langsung dari pembudidaya Desa Curug.
                    </p>
                </div>
            </motion.header>

            {/* Daftar Produk */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.ProdukID}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
                            className={`bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-b-4 ${cardColors[product.nama] || 'border-gray-500'} text-left cursor-pointer`}
                            onClick={() => openModal(product)}
                        >
                            <img
                                src={product.gambar[0]} // Gambar pertama sebagai cover
                                alt={product.nama}
                                className="w-full h-64 object-cover object-center transform hover:scale-110 transition duration-500"
                            />
                            <div className="p-6">
                                <h3 className="text-3xl font-bold mb-2 text-white">{product.nama}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-3">{product.deskripsi}</p>
                                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                                    <span className="text-sm font-medium text-teal-400">
                                        Tersedia Ukuran: {product.ukuran.join(', ')}
                                    </span>
                                    <button
                                        className="text-white bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-500 transition"
                                    >
                                        Lihat Detail →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            {/* Modal Detail Produk */}
            {selectedProduct && (
                <ProductDetailModal 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                    product={selectedProduct} 
                />
            )}
            <Footer/>
        </div>
    );
}