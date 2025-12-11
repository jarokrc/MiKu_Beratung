import { screen } from "@testing-library/react";
import HomePage from "@/pages/HomePage";
import { renderWithProviders } from "../testUtils";

describe("HomePage", () => {
  it("renders hero title and CTA to contact", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/neue perspektive: coaching & nlp/i);
    const contactLinks = screen.getAllByRole("link", { name: /erstgespraech vereinbaren|kontakt aufnehmen|erstgespraech buchen|termin abstimmen/i });
    expect(contactLinks.some((link) => link.getAttribute("href") === "/kontakt")).toBe(true);
  });
});
