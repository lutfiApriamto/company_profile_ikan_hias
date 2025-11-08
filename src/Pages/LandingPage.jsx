import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Pastikan path ke FishLoader sudah benar
import FishLoader from "../Components/FishLoader"; 
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader selama 3 detik
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FishLoader />;

  // Animasi global untuk setiap section
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animasi untuk konten Hero
  const heroStagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
<Navbar/>
      {/* 1. Hero Section (Revisi: Font lebih besar, Gradien, CTA Lebih Menonjol) */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/gif/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
        >
          <motion.h1 
            variants={itemFade} 
            className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl"
          >
            Selamat Datang di <br />
            <span className="">
              Pokdakan Curug
            </span>
          </motion.h1>
          <motion.p 
            variants={itemFade} 
            className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 font-light"
          >
            Meningkatkan kesejahteraan pembudidaya ikan melalui kolaborasi, inovasi, dan keberlanjutan.
          </motion.p>
          <motion.a
            variants={itemFade}
            href="#produk"
            className="px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-xl font-semibold transition duration-300 shadow-xl shadow-teal-500/50"
          >
            Lihat Produk Ikan Hias Kami 🐠
          </motion.a>
        </motion.div>
      </motion.section>

      {/* 2. Tentang Kami Preview (Revisi: Lebih rapi, bg-gray-50, shadow-2xl) */}
      <motion.section
        id="tentang"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 px-6 md:px-12 bg-gray-50 flex flex-col md:flex-row items-center gap-12 lg:px-36"
      >
        <div className="md:w-1/2 order-2 md:order-1 text-gray-800">
          <span className="text-sm font-medium uppercase text-teal-500 tracking-widest mb-2 block">
                Visi & Misi
            </span>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 border-l-4 border-teal-500 pl-4">
                Tentang Kami
            </h2>
          <p className="text-xl mb-6 text-gray-600 leading-relaxed">
            Pokdakan (Kelompok Pembudidaya Ikan Desa Curug) adalah kelompok yang berdedikasi untuk
            meningkatkan produksi perikanan berkelanjutan, terutama dalam budidaya ikan hias Neon, Cardinal, dan Rummy Nose Tetra.
            Kami mengedepankan inovasi teknologi, semangat kebersamaan, dan kualitas produk yang unggul.
          </p>
          <a href="/tentang" className="text-teal-600 font-bold hover:text-teal-800 transition flex items-center gap-2">
            Baca Selengkapnya <span className="text-xl">→</span>
          </a>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src="/img/pokdakan.jpg"
            alt="Budidaya Ikan"
            className="rounded-3xl shadow-2xl ring-4 ring-teal-200 hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </motion.section>

      {/* 3. Produk Preview (Revisi: Dark background, Card border, Hover effect pada gambar) */}
      <motion.section
        id="produk"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-24 px-6 md:px-12 bg-gray-900 text-center lg:px-36"
      >
        <span className="text-sm font-medium uppercase text-teal-400 tracking-widest mb-2 block">
            Kualitas Premium
        </span>
        <h2 className="text-4xl font-extrabold mb-16 text-white uppercase">
          Ikan Hias Unggulan Kami 🐠
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Neon Tetra",
              desc: "Ikan ikonik dengan garis biru-merah menyala. Sempurna untuk aquascape pemula.",
              img: "/img/neon1.jpg",
              color: "border-blue-400",
            },
            {
              title: "Cardinal Tetra",
              desc: "Mirip Neon, tapi garis merahnya memanjang. Menghadirkan warna merah menyala yang intens.",
              img: "/img/cardinal1.jpg",
              color: "border-red-400",
            },
            {
              title: "Rummy Nose Tetra",
              desc: "Ciri khas hidung merah terang. Indikator kualitas air yang sensitif dan populer.",
              img: "/img/rn1.jpg",
              color: "border-orange-400",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-b-4 ${item.color} text-left`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover object-center transform hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <a
                  href="/produk"
                  className="text-teal-400 font-semibold hover:text-teal-300 transition flex items-center gap-1"
                >
                  Detail Produk <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Keunggulan (Revisi: Dengan Ikon, Animasi Staggered, Card lebih Pop) */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 px-6 md:px-12 bg-white text-center lg:px-36"
      >
        <span className="text-sm font-medium uppercase text-gray-500 tracking-widest mb-2 block">
            Layanan Kami
        </span>
        <h2 className="text-4xl font-extrabold mb-16 text-teal-600">
          Mengapa Kami Pilihan Terbaik 🏆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { title: "Berpengalaman", desc: "Bertahun-tahun pengalaman dalam budidaya ikan hias.", icon: "🌟" },
            { title: "Kualitas Terjamin", desc: "Produk ikan unggul, sehat, dan sesuai standar ekspor.", icon: "✅" },
            { title: "Dukungan Teknis", desc: "Kami sediakan konsultasi budidaya pasca-pembelian.", icon: "⚙️" },
            { title: "Komunitas Solid", desc: "Didukung jaringan pembudidaya di Desa Curug.", icon: "🤝" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-teal-50 rounded-xl shadow-lg border-b-4 border-teal-400"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-teal-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. CTA Section (Revisi: Font lebih tegas, Tombol lebih besar) */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-teal-600 text-white text-center shadow-inner"
      >
        <h2 className="text-4xl font-extrabold mb-4">
          Siap Jadi Mitra Budidaya Kami?
        </h2>
        <p className="text-xl mb-10 font-light max-w-3xl mx-auto">
          Hubungi kami sekarang untuk kolaborasi, pemesanan skala besar, atau kemitraan jangka panjang.
        </p>
        <a
          href="/kontak"
          className="px-10 py-4 bg-white text-teal-600 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
        >
          Hubungi Kami Sekarang! 📞
        </a>
      </motion.section>

      {/* 6. Footer (Revisi: Multi-column, Informasi Kontak) */}
{/*       <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-white">
                    Pokdakan Nusantara
                </h3>
                <p className="mb-4 text-gray-400">
                    Kelompok Pembudidaya Ikan Desa Curug. Berkomitmen pada kualitas dan keberlanjutan.
                </p>
                <p className="text-sm text-gray-500 mt-6">
                    © {new Date().getFullYear()} Pokdakan Nusantara. All rights reserved.
                </p>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-3 text-teal-400">Navigasi</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-teal-400 transition">Home</a></li>
                    <li><a href="/tentang" className="hover:text-teal-400 transition">Tentang Kami</a></li>
                    <li><a href="/produk" className="hover:text-teal-400 transition">Produk</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-3 text-teal-400">Kontak</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><p className="flex items-center gap-2">📍 Desa Curug, [Nama Kota]</p></li>
                    <li><p className="flex items-center gap-2">📞 [Nomor Kontak]</p></li>
                    <li><a href="/kontak" className="text-teal-400 font-semibold hover:text-teal-300 transition mt-2 block">Email Kami →</a></li>
                </ul>
            </div>
        </div>
      </footer> */}
<Footer/>
    </>
  );
}