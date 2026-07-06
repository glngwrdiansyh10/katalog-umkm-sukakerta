import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { umkmData } from '../data/umkmData';
import LinkButton from '../components/LinkButton';
import ProductCard from '../components/ProductCard';
import { MessageCircle, ShoppingBag, ArrowLeft, Share2 } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  const umkm = umkmData.find(u => u.id === id);

  if (!umkm) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h2>UMKM tidak ditemukan</h2>
        <Link to="/" style={{ color: 'var(--primary)', marginTop: '1rem', display: 'inline-block' }}>Kembali ke Beranda</Link>
      </div>
    );
  }

  // Format pesan WA
  const waMessage = encodeURIComponent(`Halo ${umkm.owner}, saya melihat profil UMKM Anda di Katalog Desa Sukakerta. Saya ingin bertanya tentang produk Anda.`);
  const waLink = `https://wa.me/${umkm.wa_number}?text=${waMessage}`;

  return (
    <div className="animate-fade-in">
      {/* Header / Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
          <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
            <ArrowLeft size={20} />
          </div>
        </Link>
        <button className="glass-panel" style={{ padding: '0.5rem', borderRadius: '50%', display: 'flex', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
          <Share2 size={20} />
        </button>
      </div>

      {/* Profile Info */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid white', boxShadow: 'var(--shadow-md)', margin: '0 auto 1rem' }}>
          <img src={umkm.profile_pic} alt={umkm.name} className="img-cover" />
        </div>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{umkm.name}</h1>
        <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.875rem' }}>{umkm.category} • Milik {umkm.owner}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '90%', margin: '0 auto' }}>
          {umkm.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        <LinkButton 
          href={waLink} 
          icon={MessageCircle} 
          text="Hubungi via WhatsApp" 
          variant="primary" 
        />
        {/* Disembunyikan sementara, fokus ke WA dulu
        {umkm.shopee_link && (
          <LinkButton 
            href={umkm.shopee_link} 
            icon={ShoppingBag} 
            text="Beli di Shopee" 
            variant="outline" 
          />
        )}
        */}
      </div>

      {/* Product Gallery */}
      {umkm.products && umkm.products.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Katalog Produk
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {umkm.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
      
      <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--surface-glass)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
          Powered by UMKM Sukakerta
        </span>
      </div>
    </div>
  );
};

export default Profile;
