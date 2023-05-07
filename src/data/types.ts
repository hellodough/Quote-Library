export interface QuoteResponse {
        q: string,
        a: string,
        i: string,
        c: string,
        h: string,
}

export interface Quote {
        quote: string,
        authorName: string,
        authorImage: string,
        characterCount: string,
        preformattedQuote: string,
}

export interface QuoteList {
        [key: number]: Quote
}