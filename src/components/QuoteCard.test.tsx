import React from "react";
import { render, screen } from "@testing-library/react";
import QuoteCard from "./QuoteCard";
import { QuoteDetails } from "../data/types";
test("display author name and quote", () => {
  const mockDetails: QuoteDetails = {
    authorName: "Yoda",
    quote: "Hard to see, the dark side is",
    authorImage: "blah.jpg",
    preformattedQuote: "ssjkdfoisadfjso",
    characterCount: "100",
  };

  render(<QuoteCard {...mockDetails} />);

  expect(
    screen.getByText(mockDetails.authorName, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockDetails.quote, { exact: false })
  ).toBeInTheDocument();
});
