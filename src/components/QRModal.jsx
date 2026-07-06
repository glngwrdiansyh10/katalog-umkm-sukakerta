import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Download } from 'lucide-react';

const QRModal = ({ umkm, onClose }) => {
  const url = `${window.location.origin}/umkm/${umkm.id}`;

  const handleDownload = () => {
    const svg = document.getElementById('qr-svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 340;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 300, 340);
      ctx.drawImage(img, 25, 20, 250, 250);
      ctx.fillStyle = '#1a2e22';
      ctx.font = 'bold 16px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(umkm.name, 150, 300);
      ctx.font = '12px Outfit, sans-serif';
      ctx.fillStyle = '#5a7a65';
      ctx.fillText('Katalog UMKM Desa Sukakerta', 150, 322);
      const link = document.createElement('a');
      link.download = `qr-${umkm.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 999, backdropFilter: 'blur(4px)', padding: '1.5rem'
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'white', borderRadius: '24px', padding: '2rem',
        width: '100%', maxWidth: '320px', textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
          width: '32px', height: '32px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <X size={16} />
        </button>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: '600' }}>
          QR Code — {umkm.name}
        </p>

        <div style={{ background: 'var(--bg-color)', padding: '1.25rem', borderRadius: '16px', display: 'inline-block', marginBottom: '1.25rem' }}>
          <QRCodeSVG
            id="qr-svg"
            value={url}
            size={200}
            fgColor="#1b4332"
            bgColor="transparent"
            level="H"
          />
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.25rem', wordBreak: 'break-all' }}>
          {url}
        </p>

        <button onClick={handleDownload} className="btn btn-primary" style={{ display: 'flex' }}>
          <Download size={18} /> Unduh QR Code
        </button>

        <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem' }}>
          Cetak & tempel di lapak/warung warga ✨
        </p>
      </div>
    </div>
  );
};

export default QRModal;
