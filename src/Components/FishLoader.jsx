// src/components/FishLoader.jsx
export default function FishLoader({ text = "Menyiapkan halaman ..." }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#0b1531] text-white">
      <div className="relative w-24 h-24 mb-6">
        {/* Lingkaran spinner */}
        <div className="absolute inset-0 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Ikan berenang */}
        <div className="absolute inset-0 flex justify-center items-center animate-bounce">
          <span className="text-4xl">🐟</span>
        </div>
      </div>

      {/* Teks animasi */}
      <p className="text-lg font-medium animate-pulse">{text}</p>
    </div>
  );
}
