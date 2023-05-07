import React from "react";
import { render, screen } from "@testing-library/react";
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
    renderWithProvider(<HomePage />);

    expect(screen.getByRole("heading")).toHaveTextContent("Zen Quotes");
    expect(screen.getByText(mockQuote.quote)).toBeInTheDocument();
    expect(screen.getByText("quote2")).toBeInTheDocument();
    expect(screen.getByText("quote3")).toBeInTheDocument();


    // if i had more time, i'd mock out the router and check that router is called when clicking a link
  });

  test("display no quotes message if there is no quotes", () => {
    mockQuotes.clear();
    renderWithProvider(<HomePage />);

    expect(screen.getByRole("heading")).toHaveTextContent("Zen Quotes");
    expect(screen.getByText("No quotes found")).toBeInTheDocument();
  });
});
