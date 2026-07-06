import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { umkmData } from '../data/umkmData';
import { MessageCircle, ArrowLeft, Share2, CheckCircle } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  const umkm = umkmData.find(u => u.id === id);

  if (!umkm) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>UMKM tidak ditemukan</h2>
        <Link to="/" style={{ color: 'var(--primary)', fontWeight: '600' }}>← Kembali ke Beranda</Link>
      </div>
    );
  }

  const waMessage = encodeURIComponent(
    `Halo ${umkm.owner}, saya melihat profil UMKM "${umkm.name}" di Katalog Desa Sukakerta. Saya ingin bertanya tentang produk Anda 😊`
  );
  const waLink = `https://wa.me/${umkm.wa_number}?text=${waMessage}`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: umkm.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link disalin!');
    }
  };

  return (
    <div>
      {/* Profile Hero */}
      <div className="profile-hero">
        <div className="profile-nav">
          <Link to="/" className="profile-nav-btn">
            <ArrowLeft size={18} />
          </Link>
          <button className="profile-nav-btn" onClick={handleShare} style={{ border: 'none', cursor: 'pointer' }}>
            <Share2 size={18} />
          </button>
        </div>

        <div className="profile-avatar-wrapper">
          <img src={umkm.profile_pic} alt={umkm.name} className="profile-avatar" />
          <div className="profile-verified">
            <CheckCircle size={13} color="white" fill="white" />
          </div>
        </div>

        <div className="profile-name">{umkm.name}</div>
        <div className="profile-meta">{umkm.category} • Milik {umkm.owner}</div>
      </div>

      {/* Profile Body */}
      <div className="profile-body animate-fade-in">
        {/* Description */}
        <div className="profile-desc-card">
          <p className="profile-desc-text">{umkm.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </a>
          {/* Tombol Shopee bisa diaktifkan lagi di sini jika dibutuhkan nanti */}
        </div>

        {/* Product Catalog */}
        {umkm.products && umkm.products.length > 0 && (
          <>
            <div className="catalog-title">Katalog Produk</div>
            <div className="product-grid">
              {umkm.products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-img">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="footer">
        <span>🌿 UMKM Desa Sukakerta</span>
      </div>
    </div>
  );
};

export default Profile;
