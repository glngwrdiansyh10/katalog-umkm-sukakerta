export const umkmData = [
  {
    id: "rangginang-ibu-ani",
    name: "Rangginang Ibu Ani",
    owner: "Ibu Ani",
    category: "Makanan Ringan",
    description: "Rangginang renyah dan gurih khas Kp. Muhara, Desa Sukakerta. Terbuat dari ketan pilihan dan resep turun-temurun. Cocok untuk camilan santai keluarga.",
    wa_number: "6281234567890",
    shopee_link: "https://shopee.co.id/rangginangibuani",
    profile_pic: "https://images.unsplash.com/photo-1599598425947-330026206a05?q=80&w=400&auto=format&fit=crop",
    products: [
      { id: "p1", name: "Rangginang Terasi", price: "Rp 15.000", image: "https://images.unsplash.com/photo-1599598425947-330026206a05?q=80&w=400&auto=format&fit=crop" },
      { id: "p2", name: "Rangginang Bawang", price: "Rp 15.000", image: "https://images.unsplash.com/photo-1599598425947-330026206a05?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    id: "kripik-pisang-mang-oleh",
    name: "Kripik Pisang Mang Oleh",
    owner: "Mang Oleh",
    category: "Makanan Ringan",
    description: "Kripik pisang manis dan asin dengan potongan tipis yang super renyah. Best seller di Sukakerta!",
    wa_number: "6289876543210",
    shopee_link: "",
    profile_pic: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400&auto=format&fit=crop",
    products: [
      { id: "p3", name: "Kripik Pisang Manis", price: "Rp 10.000", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400&auto=format&fit=crop" },
      { id: "p4", name: "Kripik Pisang Asin", price: "Rp 10.000", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400&auto=format&fit=crop" }
    ]
  }
];

// === DATA PENGUMUMAN / EVENT DESA ===
// Tambah, hapus, atau edit pengumuman di sini
export const announcements = [
  {
    id: "a1",
    emoji: "🩸",
    title: "Donor Darah PUSAKA",
    desc: "Kolaborasi bersama Ajengan PUSAKA. Awal Agustus 2026.",
    color: "#fee2e2",
    textColor: "#991b1b"
  },
  {
    id: "a2",
    emoji: "🚶",
    title: "Jalan Santai Agustusan",
    desc: "Menelusuri Desa Sukakerta bersama. Daftar sekarang!",
    color: "#dcfce7",
    textColor: "#166534"
  }
];

// === DATA TENTANG DESA ===
export const desaInfo = {
  name: "Desa Sukakerta",
  kecamatan: "Karawang",
  kepala_desa: "Bapak Rudi Hadiansyah",
  jumlah_rt: 47,
  sekolah: "5 SD Negeri, 1 SD Swasta, 1 SMP Swasta, 1 SMK",
  deskripsi: "Desa Sukakerta dikenal dengan potensi UMKM-nya yang berkembang pesat, khususnya produk makanan ringan tradisional seperti Rangginang. Dengan 47 RT yang tersebar hingga Kp. Muhara, desa ini terus berinovasi untuk membawa produk lokal ke pasar yang lebih luas."
};
