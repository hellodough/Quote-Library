import QuoteContext from "../components/QuoteContext";
import { useEffect, useState } from "react";
import { QuoteDetails } from "../data/types";
import { getQuotes } from "../data";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  const [quotes, setQuotes] = useState<Map<number, QuoteDetails> | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuotes()
      .then((quotes) => {
        setFetchError(false);
        setQuotes(quotes);
        setLoading(false);
      })
      .catch((error) => setFetchError(error));
  }, []);

  if (fetchError) return <p>There was a problem fetching</p>;
  if (isLoading) return "loading";
  if (quotes) {
    return (
      <QuoteContext.Provider value={quotes}>
        <Component {...pageProps} />
      </QuoteContext.Provider>
    );
  }
  return null;
}
