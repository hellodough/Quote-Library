import {QuoteDetails, QuoteResponse } from './types';

/**
 * Formats each of the quotes to be user friendly and then assigns it to an id
 */
// export const formatQuotes = (quotes: QuoteResponse[]): QuoteList => quotes.reduce((obj, quote, index) => ({ ...obj, [`${index}`]: formatQuote(quote)}), {});
export const formatQuotes = (quotes: QuoteResponse[]) => {
    let index = 0;
    return new Map(quotes.map(quote => [index++, formatQuote(quote)]))
};

/**
 * Rename the quote fields to be user friendly
 */
export const formatQuote = ({q, a, i, c, h}: QuoteResponse): QuoteDetails => ({
    quote: q,
    authorName: a,
    authorImage: i,
    characterCount: c,
    preformattedQuote: h 
})