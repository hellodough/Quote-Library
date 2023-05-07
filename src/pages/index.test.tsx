import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from ".";
import QuoteContext from "../components/QuoteContext";
import { QuoteDetails } from "../data/types";

describe("Home page", () => {
  const mockQuotes = new Map();
  const mockQuote: QuoteDetails = {
    quote: "Hard to see, the dark side is",
    authorName: "Yoda",
    preformattedQuote:
      "<blockquote>&ldquo;Hard to see, the dark side is</blockquote>",
    characterCount: "100",
    authorImage: "yoda.jpg",
  };

  beforeEach(() => {
    mockQuotes.set(0, mockQuote);
    mockQuotes.set(1, { ...mockQuote, quote: "quote2" });
    mockQuotes.set(2, { ...mockQuote, quote: "quote3" });
  });
  const renderWithProvider = (children) =>
    render(
      <QuoteContext.Provider value={mockQuotes}>
        {children}
      </QuoteContext.Provider>
    );
  test("displays the home screen header with quotes and redirects on click", () => {
    const user = userEvent.setup();
    renderWithProvider(<HomePage />);

    expect(screen.getByRole("heading")).toHaveTextContent("Zen Quotes");
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(screen.getByText(mockQuote.quote)).toBeInTheDocument();
    expect(screen.getByText("quote2")).toBeInTheDocument();
    expect(screen.getByText("quote3")).toBeInTheDocument();

    user.click(screen.getByText("quote2"));

    // expect that router is called
  });

  test("display no quotes message if there is no quotes", () => {
    mockQuotes.clear();
    renderWithProvider(<HomePage />);

    expect(screen.getByRole("heading")).toHaveTextContent("Zen Quotes");
    expect(screen.getByText("No quotes found")).toBeInTheDocument();
  });
});
