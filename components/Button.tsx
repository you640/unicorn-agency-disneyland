import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = `
    px-6 py-3 font-bold text-lg border-2
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-[var(--c-gold)]/50
    transform hover:-translate-y-1 hover:-translate-x-1
    shadow-[3px_3px_0px_var(--c-near-black)]
    hover:shadow-[7px_7px_0px_var(--c-charcoal)]
  `;

  const primaryStyles = `
    bg-[var(--c-gold)] text-[var(--c-near-black)] border-[var(--c-near-black)]
    hover:bg-[var(--c-near-black)] hover:text-[var(--c-gold)]
  `;
  
  const secondaryStyles = `
    bg-transparent text-[var(--c-near-black)] border-[var(--c-near-black)]
    hover:bg-[var(--c-near-black)] hover:text-[var(--c-surface-1)]
  `;

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;