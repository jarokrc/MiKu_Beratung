import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import type { ReactElement } from "react";

export type AppRoute = {
  path: string;
  element: ReactElement;
};

export const appRoutes: AppRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/kontakt", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
];