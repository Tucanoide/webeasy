import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from '@/components/sections/Contact';

describe('Contact Section', () => {
  it('should render the contact form correctly', () => {
    render(<Contact />);
    expect(screen.getByText(/Mensaje Directo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tu nombre completo/i)).toBeInTheDocument();
  });

  it('should call the API and show success message after submission', async () => {
    // Mock the fetch call
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/Tu nombre completo/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/tu@email.com/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/¿Contanos sobre tu idea?/i), { target: { value: 'Hello world' } });

    fireEvent.click(screen.getByText(/Enviar Mensaje/i));

    await waitFor(() => {
      expect(screen.getByText(/¡Mensaje Transmitido!/i)).toBeInTheDocument();
    });

    // Check if fetch was called with the correct data
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
      method: 'POST',
      body: expect.stringContaining('"name":"Test User"'),
    }));
  });
});
