import React from 'react';
import { desaInfo } from '../data/umkmData';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, School, User, Info, Star } from 'lucide-react';

const AboutDesa = () => {
  const stats = [
    { label: 'Jumlah RT', value: desaInfo.jumlah_rt, emoji: '🏘️' },
    { label: 'SD & SMP & SMK', value: '7', emoji: '🏫' },
    { label: 'Ciri Khas', value: 'UMKM', emoji: '🛍️' },
    { label: 'Kode Pos', value: desaInfo.kode_pos, emoji: '📮' },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="profile-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="profile-nav">
          <Link to="/" className="profile-nav-btn"><ArrowLeft size={18} /></Link>
          <div />
        </div>
        <img
          src="/logo-kkn.jpeg"
          alt="Logo KKN"
          style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '1rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="profile-name" style={{ fontSize: '1.35rem' }}>{desaInfo.name}</div>
        <div className="profile-meta">{desaInfo.kecamatan}</div>
        <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
          {desaInfo.provinsi}
        </div>
      </div>

      {/* Body */}
      <div className="profile-body animate-fade-in">

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          {stats.map((item, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '16px', padding: '1rem',
              textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{item.emoji}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary)' }}>{item.value}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500', marginTop: '0.15rem' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Kepala Desa */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '1rem 1.25rem',
          marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid var(--border)'
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <User size={20} color="white" />
          </div>
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>Kepala Desa</p>
            <p style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>{desaInfo.kepala_desa}</p>
          </div>
        </div>

        {/* Lokasi */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '1rem 1.25rem',
          marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid var(--border)'
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <MapPin size={20} color="white" />
          </div>
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>Lokasi</p>
            <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>{desaInfo.kecamatan}</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{desaInfo.provinsi}</p>
          </div>
        </div>

        {/* Ciri Khas */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '1rem 1.25rem',
          marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid var(--border)'
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Star size={20} color="white" />
          </div>
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>Ciri Khas Desa</p>
            <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>{desaInfo.ciri_khas}</p>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="profile-desc-card" style={{ marginBottom: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
            <Info size={16} /> Tentang Desa
          </div>
          <p className="profile-desc-text">{desaInfo.deskripsi}</p>
        </div>

        {/* Fasilitas Pendidikan */}
        <div className="profile-desc-card" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
            <School size={16} /> Fasilitas Pendidikan
          </div>
          <p className="profile-desc-text">{desaInfo.sekolah}</p>
        </div>

        {/* KKN Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
          borderRadius: '16px', padding: '1.25rem', textAlign: 'center', color: 'white', marginBottom: '0.5rem'
        }}>
          <p style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.35rem' }}>🎓 Proker KKN Informatika 2026</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Digitalisasi UMKM Desa Sukakerta</p>
        </div>
      </div>

      <div className="footer">
        <p>🌿 Desa Sukakerta — Kec. Cilaku, Cianjur</p>
      </div>
    </div>
  );
};

export default AboutDesa;
