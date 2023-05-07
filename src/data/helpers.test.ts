import { formatQuote, formatQuotes } from "./helpers";
import { QuoteDetails, QuoteResponse } from "./types";

const mockQuoteResponse: QuoteResponse = {
  q: "Hard to see, the dark side is",
  a: "Yoda",
  h: "<blockquote>&ldquo;Hard to see, the dark side is</blockquote>",
  c: '100',
  i: "yoda.jpg",
};

const formattedQuote: QuoteDetails = {
  quote: mockQuoteResponse.q,
  authorName: mockQuoteResponse.a,
  preformattedQuote: mockQuoteResponse.h,
  characterCount: mockQuoteResponse.c,
  authorImage: mockQuoteResponse.i,
};
test("format quote fields to be user friendly", () => {
  const actual = formatQuote(mockQuoteResponse);

  expect(actual).toStrictEqual(formattedQuote);
});

test('format quote response and assign it an id', () => {
    const mockQuotes = [mockQuoteResponse, mockQuoteResponse, mockQuoteResponse];

    const expectedFormat = new Map();
    expectedFormat.set(0, formattedQuote);
    expectedFormat.set(1, formattedQuote);
    expectedFormat.set(2, formattedQuote);

    const actual = formatQuotes(mockQuotes);

    expect(actual).toStrictEqual(expectedFormat);
})

test('should return empty map if no quotes', () => {
    const mockQuotes: QuoteResponse[] = [];

    const expectedFormat = new Map();

    const actual = formatQuotes(mockQuotes);

    expect(actual).toStrictEqual(expectedFormat);
})