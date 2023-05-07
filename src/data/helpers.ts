import {Quote, QuoteResponse } from './types';

export const formatQuotes = (quotes: QuoteResponse[]) => quotes.map(quote => formatQuote(quote));

const formatQuote = ({q, a, i, c, h}: QuoteResponse): Quote => ({
    quote: q,
    authorName: a,
    authorImage: i,
    characterCount: c,
    preformattedQuote: h 
})