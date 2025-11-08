export default function Footer(){
    return(
          <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-white">
                    Pokdakan curug
                </h3>
                <p className="mb-4 text-gray-400">
                    Kelompok Pembudidaya Ikan Desa Curug. Berkomitmen pada kualitas dan keberlanjutan.
                </p>
                <p className="text-sm text-gray-500 mt-6">
                    © {new Date().getFullYear()} Pokdakan curug. All rights reserved.
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
                    <li><p className="flex items-center gap-2">📍 Desa Curug, Kabupaten Bogor Jawabarat</p></li>
                    <li><p className="flex items-center gap-2">📞 +62 813-8221-5564</p></li>
                </ul>
            </div>
        </div>
      </footer>
    )
}