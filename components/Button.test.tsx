import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('applies primary styles by default', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('bg-[var(--c-gold)]');
  });

  it('applies primary styles when variant is "primary"', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('bg-[var(--c-gold)]');
    expect(buttonElement).not.toHaveClass('bg-transparent');
  });

  it('applies secondary styles when variant is "secondary"', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText('Secondary Button');
    expect(buttonElement).toHaveClass('bg-transparent');
    expect(buttonElement).not.toHaveClass('bg-[var(--c-gold)]');
  });

  it('passes other props like onClick to the button element', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    render(<Button onClick={handleClick}>Clickable</Button>);
    screen.getByText('Clickable').click();
    expect(clicked).toBe(true);
  });
});
