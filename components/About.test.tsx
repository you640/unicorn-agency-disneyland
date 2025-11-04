import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';
import { LanguageProvider } from '../contexts/LanguageContext';

// A helper function to render components with the LanguageProvider
const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  );
};

describe('About component', () => {
  it('renders the main heading with translated text', () => {
    renderWithProvider(<About />);
    
    // The default language is Slovak ('sk')
    // aboutHeading: 'O nás: Tvoríme budúcnosť zábavy'
    const heading = screen.getByRole('heading', { 
      name: /o nás: tvoríme budúcnosť zábavy/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "Our Story" and "Our Team" sections', () => {
    renderWithProvider(<About />);

    // aboutStoryTitle: 'Náš príbeh'
    const storyHeading = screen.getByRole('heading', { name: 'Náš príbeh' });
    expect(storyHeading).toBeInTheDocument();

    // aboutTeamTitle: 'Náš tím'
    const teamHeading = screen.getByRole('heading', { name: 'Náš tím' });
    expect(teamHeading).toBeInTheDocument();
  });

  it('renders the "Our Values" section with value cards', () => {
    renderWithProvider(<About />);

    // aboutValuesTitle: 'Naše hodnoty'
    const valuesHeading = screen.getByRole('heading', { name: 'Naše hodnoty' });
    expect(valuesHeading).toBeInTheDocument();

    // aboutValue1Title: 'Inovácia'
    const value1 = screen.getByText('Inovácia');
    expect(value1).toBeInTheDocument();

    // aboutValue2Title: 'Etika'
    const value2 = screen.getByText('Etika');
    expect(value2).toBeInTheDocument();

    // aboutValue3Title: 'Komunita'
    const value3 = screen.getByText('Komunita');
    expect(value3).toBeInTheDocument();
  });

  it('renders the team member details correctly', () => {
    renderWithProvider(<About />);

    // aboutTeamName: 'Filip Kosorin'
    const name = screen.getByText('Filip Kosorin');
    expect(name).toBeInTheDocument();

    // aboutTeamRole: 'Zakladateľ & CEO'
    const role = screen.getByText('Zakladateľ & CEO');
    expect(role).toBeInTheDocument();
  });
});