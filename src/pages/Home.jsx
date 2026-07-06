import React from 'react';
import { umkmData } from '../data/umkmData';
import UmkmCard from '../components/UmkmCard';
import { MapPin, Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {/* Nanti kalau kamu simpan logo-kkn.png di folder public, logonya otomatis muncul di sini! */}
        <img 
          src="/logo-kkn.jpeg" 
          alt="Logo KKN" 
          style={{ height: '60px', marginBottom: '1rem', objectFit: 'contain' }}
          onError={(e) => e.target.style.display = 'none'} // Sembunyikan jika gambar belum ada
        />
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(21, 128, 61, 0.1)', color: 'var(--primary-dark)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>
          <MapPin size={16} /> Desa Sukakerta
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Katalog <span className="text-gradient">UMKM</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Mendukung produk lokal Desa Sukakerta melangkah ke dunia digital.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Cari UMKM atau produk..." 
          style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '1rem', color: 'var(--text-main)' }}
        />
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Daftar UMKM</h2>
        {umkmData.map((umkm) => (
          <UmkmCard key={umkm.id} umkm={umkm} />
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <p>Proker KKN Informatika &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Home;
