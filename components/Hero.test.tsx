import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';
import { LanguageProvider } from '../contexts/LanguageContext';

// A helper function to render components with the LanguageProvider
const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  );
};

describe('Hero component', () => {
  it('renders the main heading with translated text', () => {
    renderWithProvider(<Hero />);
    
    // The default language is Slovak ('sk')
    // heroTitle: 'Nový pohľad na', heroTitleSpan: 'erotický priemysel.'
    const heading = screen.getByRole('heading', { 
      name: /nový pohľad na erotický priemysel/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the primary and secondary call-to-action buttons', () => {
    renderWithProvider(<Hero />);

    // heroBtnPrimary: 'Preskúmať Gametusy'
    const primaryButton = screen.getByRole('button', { name: 'Preskúmať Gametusy' });
    expect(primaryButton).toBeInTheDocument();

    // heroBtnSecondary: 'Kontaktujte nás'
    const secondaryButton = screen.getByRole('button', { name: 'Kontaktujte nás' });
    expect(secondaryButton).toBeInTheDocument();
  });

  it('renders the floating logo image', () => {
    renderWithProvider(<Hero />);

    // logoAlt: 'Logo UNICORN'
    const logo = screen.getByAltText('Logo UNICORN');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'https://cloud.papihairdesign.sk/wp-content/uploads/2025/10/unicorn-logo.png');
  });
});