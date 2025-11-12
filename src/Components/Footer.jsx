// src/components/UserComponents/Footer.jsx
import { Link } from "react-router-dom"
import { IconBrandTiktok, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react"

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#0b1531] to-[#112240] text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
        {/* Grid Utama */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-20">
          
          {/* Kolom 1 - Brand */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              E-Commerce Ikan Hias
            </h3>
            <div className="rounded-md overflow-hidden w-40 md:w-48 border border-white/10 shadow- bg-cover bg-center">
              <img
                src="/img/logo.jpg"
                alt="E-Commerce Ikan Hias"
                className="object-cover w-full h-44 md:h-44 rounded-md "
              />
            </div>
          </div>

          {/* Kolom 2 - Hubungi Kami */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Hubungi Kami
            </h3>
            <a
              href="https://wa.me/6281219396245"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm md:text-base font-medium hover:text-[#00b4d8] transition"
            >
              0813-8221-5564 (WA Only)
            </a>
            <p className="text-sm md:text-base mt-2 text-white/70">
              Desa Curug, Kabupaten Bogor, Jawa Bara
            </p>
          </div>

          {/* Kolom 3 - Link Terkait */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Link Terkait
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/tentang" className="hover:text-[#00b4d8] transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/produk" className="hover:text-[#00b4d8] transition">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-[#00b4d8] transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4 - Sosial Media */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Sosial Media
            </h3>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/50 transition"
              >
                <IconBrandInstagram className="text-white hover:text-[#E1306C] size-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 transition"
              >
                <IconBrandFacebook className="text-white hover:text-[#1877F2] size-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#00f2ea]/20 border border-white/10 hover:border-[#00f2ea]/50 transition"
              >
                <IconBrandTiktok className="text-white hover:text-[#00f2ea] size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center pb-14 lg:pb-0">
          <p className="text-xs md:text-sm text-white/60">
            © {new Date().getFullYear()} Marketplace Ikan Hias. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
