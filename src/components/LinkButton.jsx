import React from 'react';

const LinkButton = ({ href, icon: Icon, text, variant = 'primary' }) => {
  const baseClass = "btn";
  const variantClass = variant === 'primary' ? "btn-primary" : "btn-outline";
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseClass} ${variantClass}`}
    >
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </a>
  );
};

export default LinkButton;
