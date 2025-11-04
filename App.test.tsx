import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

// Mock window.print
window.print = vi.fn();

// Mock window.location.reload
Object.defineProperty(window, 'location', {
  value: {
    ...window.location,
    reload: vi.fn(),
    hash: ''
  },
  writable: true,
});


// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe('Full Application End-to-End Test', () => {
  let user;

  // Mock Service Worker
  let postMessageSpy;
  beforeEach(() => {
    postMessageSpy = vi.fn();
    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      value: {
        controller: {
          postMessage: postMessageSpy,
        },
        register: vi.fn().mockResolvedValue({}),
      },
    });
    
    // Mock MessageChannel
    vi.stubGlobal('MessageChannel', class {
      port1 = { onmessage: vi.fn() };
      port2 = {};
    });

    user = userEvent.setup();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render, navigate, switch languages, and handle form submission', async () => {
    render(<App />);

    // 1. Initial Load & Hero Section
    expect(screen.getByRole('heading', { name: /nový pohľad na erotický priemysel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /preskúmať gametusy/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /kontaktujte nás/i })).toBeInTheDocument();
    const logoInHero = screen.getByAltText('Logo UNICORN');
    expect(logoInHero).toBeInTheDocument();
    expect(logoInHero).toHaveAttribute('src', 'https://cloud.papihairdesign.sk/wp-content/uploads/2025/10/unicorn-logo.png');


    // 2. Header Navigation & Scrolling
    const navLinks = [
      { name: 'O nás', id: 'about-heading' },
      { name: 'Agentúra', id: 'agency-heading' },
      { name: 'Naše služby', id: 'showcase-heading' },
      { name: 'Projekty', id: 'projects-heading' }, // Updated to unified projects nav link
      { name: 'Vízia', id: 'vision-heading' },
      { name: 'Roadmap', id: 'roadmap-heading' },
      { name: 'Gametusy', id: 'gametusy-heading' },
      { name: 'Projekt', id: 'project-heading' },
      { name: 'Investori', id: 'investors-heading' },
      { name: 'Kontakt', id: 'casting-heading' },
    ];

    for (const link of navLinks) {
      const navElement = screen.getByRole('link', { name: link.name });
      await user.click(navElement);
      // Check if the scrollIntoView was called on the correct element
      // We can't check the element itself easily, so we check if the function was called.
      expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
    }
    
    // 3. Language Switching
    const langButton = screen.getAllByRole('button', { name: /sk/i })[0];
    await user.click(langButton);
    
    // Verify text changed to English
    expect(await screen.findByRole('heading', { name: /a new perspective on the adult industry/i })).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /about us/i })).toBeInTheDocument();
    
    // Switch back to Slovak
    const langButtonEn = screen.getAllByRole('button', { name: /en/i })[0];
    await user.click(langButtonEn);
    expect(await screen.findByRole('heading', { name: /nový pohľad na erotický priemysel/i })).toBeInTheDocument();

    // 4. Contact Form Interaction (formerly Casting Form)
    const nameInput = screen.getByLabelText(/meno a priezvisko/i);
    const emailInput = screen.getByLabelText(/e-mailová adresa/i);
    const messageTextarea = screen.getByLabelText(/vaša správa/i);
    const submitButton = screen.getByRole('button', { name: /odoslať správu/i });
    
    // Test validation: submit empty (message is optional)
    await user.click(submitButton);
    expect(await screen.findByText(/meno je povinné/i)).toBeInTheDocument();
    expect(await screen.findByText(/e-mail je povinný/i)).toBeInTheDocument();
    // No error for message field as it's optional

    // Test validation: invalid email
    await user.type(nameInput, 'Ján Novák');
    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);
    expect(await screen.findByText(/zadajte platnú e-mailovú adresu/i)).toBeInTheDocument();

    // Test successful submission
    await user.clear(emailInput);
    await user.type(emailInput, 'jan.novak@example.com');
    await user.type(messageTextarea, 'Dobrý deň, mal by som záujem o spoluprácu.');
    await user.click(submitButton);

    expect(await screen.findByRole('button', { name: /odosiela sa/i })).toBeInTheDocument();
    expect(await screen.findByText(/ďakujeme! vaša správa bola úspešne odoslaná/i, {}, { timeout: 2000 })).toBeInTheDocument();
    
    // Check if form is cleared
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageTextarea.value).toBe('');
    
    // 5. Investor One-Pager PDF Download
    const downloadPdfButton = screen.getByRole('button', { name: /stiahnuť ako pdf/i });
    await user.click(downloadPdfButton);
    expect(window.print).toHaveBeenCalledTimes(1);

    // 6. Test Service Worker Cache Clearing
    const logoInHeader = screen.getByRole('link', { name: /unicorn home/i });
    await user.click(logoInHeader);

    // Check for visual feedback
    expect(await screen.findByText(/čistím cache/i)).toBeInTheDocument();

    // Check that the message was sent to the service worker
    expect(postMessageSpy).toHaveBeenCalledWith(
      { action: 'CLEAR_CACHE_AND_RELOAD' },
      [expect.any(Object)] // MessagePort
    );

    // Simulate response from service worker and check for reload
    // In a real test environment, this would be more complex, but we can check the spy
    // and then manually trigger the callback to simulate the SW response.
    const messageChannelInstance = vi.mocked(MessageChannel).mock.instances[0];
    act(() => {
        messageChannelInstance.port1.onmessage({ data: { status: 'complete' } });
    });
    
    // Check if location.reload was called
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});