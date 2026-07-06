import React, { useState } from 'react';
import { umkmData } from '../data/umkmData';
import UmkmCard from '../components/UmkmCard';
import { MapPin, Search, ShoppingBag, Users } from 'lucide-react';

const Home = () => {
  const [query, setQuery] = useState('');
  const filtered = umkmData.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase()) ||
    u.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Hero Header */}
      <div className="hero-header">
        <img
          src="/logo-kkn.jpeg"
          alt="Logo KKN"
          className="hero-logo"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="hero-badge">
          <MapPin size={13} /> Desa Sukakerta, Karawang
        </div>
        <h1 className="hero-title">
          Katalog <span>UMKM</span>
        </h1>
        <p className="hero-subtitle">
          Temukan & dukung produk lokal terbaik dari warga Desa Sukakerta
        </p>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar animate-fade-in">
        <div className="stat-item">
          <div className="stat-value">{umkmData.length}</div>
          <div className="stat-label">UMKM Aktif</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-value">47</div>
          <div className="stat-label">RT / RW</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-value">100%</div>
          <div className="stat-label">Lokal & Asli</div>
        </div>
      </div>

      {/* Search */}
      <div className="search-wrap">
        <div className="search-box">
          <Search size={18} color="var(--text-light)" />
          <input
            type="text"
            placeholder="Cari UMKM atau produk..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* UMKM List */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">Daftar UMKM</span>
          <span className="section-count">{filtered.length} UMKM</span>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <ShoppingBag size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
            <p>UMKM tidak ditemukan</p>
          </div>
        ) : (
          filtered.map((umkm, i) => (
            <UmkmCard key={umkm.id} umkm={umkm} index={i} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="footer">
        <p>🌿 Proker KKN Informatika © {new Date().getFullYear()}</p>
        <p style={{ marginTop: '0.25rem' }}>Desa Sukakerta — Karawang</p>
      </div>
    </div>
  );
};

export default Home;
