import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Configurator from '@/components/configurator/Configurator';
import { ConfiguratorProvider } from '@/context/ConfiguratorContext';

describe('Configurator Section', () => {
  it('should select a package and update the total', async () => {
    render(
      <ConfiguratorProvider>
        <Configurator />
      </ConfiguratorProvider>
    );

    // Initial state: No summary bar
    expect(screen.queryByTestId('summary-bar')).not.toBeInTheDocument();

    // Select Landing Page
    const landingCard = screen.getByText("Landing Page").closest('.bento-card');
    fireEvent.click(landingCard!);

    // Check if summary bar appears
    await waitFor(() => {
      expect(screen.getByTestId('summary-bar')).toBeInTheDocument();
      expect(screen.getByText(/Total Desarrollo/i)).toBeInTheDocument();
    });

    // Select a power-up (Bot Personalizado)
    const powerUp = screen.getByText(/Bot Personalizado/i).closest('.relative');
    fireEvent.click(powerUp!);

    // Check if total updates (1000 + 800 = 1800)
    await waitFor(() => {
      // Use a more flexible regex to account for commas or spaces in toLocaleString()
      expect(screen.getByTestId('summary-bar')).toHaveTextContent(/1.*800/);
    });
  });

  it('should open and submit the project request modal', async () => {
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(
      <ConfiguratorProvider>
        <Configurator />
      </ConfiguratorProvider>
    );

    // Select a package to show the summary bar
    fireEvent.click(screen.getByText("Landing Page").closest('.bento-card')!);

    // Wait for summary bar and click "Continuar Solicitud"
    await waitFor(() => {
      expect(screen.getByTestId('summary-bar')).toBeInTheDocument();
      fireEvent.click(screen.getByText(/Continuar Solicitud/i));
    });

    // Check if modal is open (finalizá tu pedido)
    expect(screen.getByText(/Finalizá tu pedido/i)).toBeInTheDocument();

    // Fill the form
    fireEvent.change(screen.getByPlaceholderText(/Juan Pérez/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/juan@empresa.com/i), { target: { value: 'john@doe.com' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Solicitar Presupuesto/i));

    // Check if fetch was called with configuration data
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('"type":"project"'),
      }));
    });

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/¡Solicitud Enviada!/i)).toBeInTheDocument();
    });
  });
});
