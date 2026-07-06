import React from 'react';
import { desaInfo } from '../data/umkmData';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, School, User, Info } from 'lucide-react';

const AboutDesa = () => {
  return (
    <div>
      {/* Hero */}
      <div className="profile-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="profile-nav">
          <Link to="/" className="profile-nav-btn">
            <ArrowLeft size={18} />
          </Link>
          <div />
        </div>
        <img
          src="/logo-kkn.jpeg"
          alt="Logo KKN"
          style={{ width: '72px', height: '72px', objectFit: 'contain', marginBottom: '1rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="profile-name" style={{ fontSize: '1.4rem' }}>{desaInfo.name}</div>
        <div className="profile-meta">{desaInfo.kecamatan}</div>
      </div>

      {/* Body */}
      <div className="profile-body animate-fade-in">

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { icon: <Users size={18} />, label: 'Jumlah RT', value: desaInfo.jumlah_rt },
            { icon: <User size={18} />, label: 'Kepala Desa', value: 'Bpk. Rudi H.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '16px', padding: '1rem',
              textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--primary)', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>{item.icon}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary)' }}>{item.value}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Deskripsi */}
        <div className="profile-desc-card" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
            <Info size={16} /> Tentang Desa
          </div>
          <p className="profile-desc-text">{desaInfo.deskripsi}</p>
        </div>

        {/* Fasilitas */}
        <div className="profile-desc-card" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
            <School size={16} /> Fasilitas Pendidikan
          </div>
          <p className="profile-desc-text">{desaInfo.sekolah}</p>
        </div>

        {/* KKN Info */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
          borderRadius: '16px', padding: '1.25rem', textAlign: 'center', color: 'white'
        }}>
          <p style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.35rem' }}>🎓 Proker KKN Informatika</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Digitalisasi UMKM Desa Sukakerta 2026</p>
        </div>
      </div>

      <div className="footer">
        <p>🌿 Desa Sukakerta — Karawang</p>
      </div>
    </div>
  );
};

export default AboutDesa;
