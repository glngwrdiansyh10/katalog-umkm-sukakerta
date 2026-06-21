import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ChevronRight } from 'lucide-react';

const UmkmCard = ({ umkm }) => {
  return (
    <Link to={`/umkm/${umkm.id}`} style={{ textDecoration: 'none' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--primary-light)' }}>
          <img src={umkm.profile_pic} alt={umkm.name} className="img-cover" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{umkm.name}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Store size={14} /> {umkm.category}
          </p>
        </div>
        <div style={{ color: 'var(--primary)' }}>
          <ChevronRight size={24} />
        </div>
      </div>
    </Link>
  );
};

export default UmkmCard;
