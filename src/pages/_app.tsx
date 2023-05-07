import React from "react";
import QuoteContext from "../components/QuoteContext";
import { useEffect, useState } from "react";
import { QuoteDetails } from "../data/types";
import { getQuotes } from "../data";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [quotes, setQuotes] = useState<Map<number, QuoteDetails> | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuotes()
      .then((quotes) => {
        setFetchError(false);
        setQuotes(quotes);
      })
      .catch((error) => setFetchError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (fetchError) return <p>There was a problem fetching</p>;
  if (isLoading) return <p>loading</p>;
  if (quotes) {
    return (
      <QuoteContext.Provider value={quotes}>
        <div className="w-screen relative">
          <Component {...pageProps} />
        </div>
      </QuoteContext.Provider>
    );
  }
  return null;
}
