import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { render } from "@testing-library/react";
import { I18nProvider } from "@/app/I18nProvider";

export const renderWithProviders = (ui: ReactNode, { route = "/" } = {}) => {
  const queryClient = new QueryClient();
  return render(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
        </I18nProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};