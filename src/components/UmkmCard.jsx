import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, User } from 'lucide-react';

const UmkmCard = ({ umkm, index = 0 }) => {
  const delay = index < 3 ? `delay-${(index + 1) * 100}` : '';

  return (
    <Link to={`/umkm/${umkm.id}`} className={`umkm-card animate-fade-in ${delay}`}>
      <div className="umkm-card-avatar">
        <img src={umkm.profile_pic} alt={umkm.name} />
      </div>
      <div className="umkm-card-info">
        <div className="umkm-card-name">{umkm.name}</div>
        <div className="umkm-card-category">
          <ShoppingBag size={12} /> {umkm.category}
        </div>
        <div className="umkm-card-owner">
          <User size={11} /> {umkm.owner}
        </div>
      </div>
      <div className="umkm-card-arrow">
        <ChevronRight size={16} />
      </div>
    </Link>
  );
};

export default UmkmCard;
