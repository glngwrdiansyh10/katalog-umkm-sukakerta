import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ChevronRight } from 'lucide-react';

const UmkmCard = ({ umkm }) => {
  return (
    <Link to={`/umkm/${umkm.id}`} style={{ textDecoration: 'none' }}>
      <div className="glass-panel umkm-card-hover animate-fade-in" style={{ padding: '1.25rem 1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1.25rem', cursor: 'pointer' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
          <img src={umkm.profile_pic} alt={umkm.name} className="img-cover" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', fontWeight: '700', color: 'var(--text-main)' }}>{umkm.name}</h3>
          <p style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Store size={15} /> {umkm.category}
          </p>
        </div>
        <div style={{ color: 'var(--text-muted)', background: 'rgba(0,0,0,0.03)', padding: '0.5rem', borderRadius: '50%', display: 'flex', transition: 'all 0.3s' }}>
          <ChevronRight size={20} />
        </div>
      </div>
    </Link>
  );
};

export default UmkmCard;
