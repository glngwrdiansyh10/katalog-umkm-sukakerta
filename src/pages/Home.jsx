import React, { useState } from 'react';
import { umkmData, announcements } from '../data/umkmData';
import UmkmCard from '../components/UmkmCard';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { MapPin, Search, ShoppingBag, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['Semua', 'Makanan Ringan', 'Minuman', 'Kerajinan'];

const Home = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = umkmData.filter(u => {
    const matchQuery = u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.category.toLowerCase().includes(query.toLowerCase());
    const matchCategory = activeCategory === 'Semua' || u.category === activeCategory;
    return matchQuery && matchCategory;
  });

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
        <h1 className="hero-title">Katalog <span>UMKM</span></h1>
        <p className="hero-subtitle">
          Temukan & dukung produk lokal terbaik dari warga Desa Sukakerta
        </p>

        {/* About Desa button */}
        <Link to="/tentang-desa" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)',
          padding: '0.45rem 1rem', borderRadius: '99px', fontSize: '0.78rem',
          fontWeight: '600', textDecoration: 'none', marginTop: '1rem',
          border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)'
        }}>
          <Info size={13} /> Tentang Desa
        </Link>
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

      {/* Announcements */}
      <AnnouncementBanner />

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

      {/* Category Filter */}
      <div style={{ padding: '0.875rem 1.25rem 0', display: 'flex', gap: '0.5rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '99px',
              fontSize: '0.8rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.2s',
              background: activeCategory === cat ? 'var(--primary)' : 'white',
              color: activeCategory === cat ? 'white' : 'var(--text-muted)',
              boxShadow: activeCategory === cat
                ? '0 4px 12px rgba(45,106,79,0.3)'
                : '0 2px 6px rgba(0,0,0,0.05)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* UMKM List */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">Daftar UMKM</span>
          <span className="section-count">{filtered.length} UMKM</span>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <ShoppingBag size={40} style={{ opacity: 0.25, marginBottom: '0.75rem' }} />
            <p>UMKM tidak ditemukan</p>
          </div>
        ) : (
          filtered.map((umkm, i) => (
            <UmkmCard key={umkm.id} umkm={umkm} index={i} />
          ))
        )}
      </div>

      <div className="footer">
        <p>🌿 Proker KKN Informatika © {new Date().getFullYear()}</p>
        <p style={{ marginTop: '0.25rem' }}>Desa Sukakerta — Karawang</p>
      </div>
    </div>
  );
};

export default Home;
