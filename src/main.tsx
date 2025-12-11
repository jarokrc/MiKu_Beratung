import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import App from "./app/App";
import "./styles/global.css";
import { I18nProvider } from "./app/I18nProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <App />
        </I18nProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);