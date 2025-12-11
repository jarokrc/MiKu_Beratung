import { screen } from "@testing-library/react";
import ContactPage from "@/pages/ContactPage";
import { renderWithProviders } from "../testUtils";

describe("ContactPage contact options", () => {
  it("shows mailto CTA and demo note instead of live form", () => {
    renderWithProviders(<ContactPage />, { route: "/kontakt" });

    const mailLink = screen.getByRole("link", { name: /michael\.kucerka8@gmail\.com/i });
    expect(mailLink).toHaveAttribute("href", "mailto:michael.kucerka8@gmail.com");
    expect(screen.queryByText(/demo/i)).not.toBeInTheDocument();
  });
});
