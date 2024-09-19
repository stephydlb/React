import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message component', () => {
  it('renders the message text', () => {
    render(<Message />);
    const messageElement = screen.getByText('Mon Message');
    expect(messageElement).toBeInTheDocument();
  });

  it('has the correct CSS class', () => {
    render(<Message />);
    const messageElement = screen.getByText('Mon Message');
    expect(messageElement).toHaveClass('user-message');
  });

  it('is a paragraph element', () => {
    render(<Message />);
    const messageElement = screen.getByText('Mon Message');
    expect(messageElement.tagName).toBe('P');
  });
});
