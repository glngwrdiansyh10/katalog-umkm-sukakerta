import React from 'react';
import { announcements } from '../data/umkmData';
import { X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = React.useState([]);
  const visible = announcements.filter(a => !dismissed.includes(a.id));
  if (visible.length === 0) return null;

  return (
    <div style={{ padding: '1rem 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {visible.map(a => (
        <div key={a.id} style={{
          background: a.color,
          borderRadius: '14px',
          padding: '0.875rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          border: `1px solid ${a.textColor}22`
        }}>
          <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{a.emoji}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: '700', fontSize: '0.85rem', color: a.textColor }}>{a.title}</p>
            <p style={{ fontSize: '0.77rem', color: a.textColor, opacity: 0.8 }}>{a.desc}</p>
          </div>
          <button
            onClick={() => setDismissed(d => [...d, a.id])}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: a.textColor, opacity: 0.6, flexShrink: 0 }}
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementBanner;
