// index.html
import { useEffect, useState } from 'react';
import { Quote } from '../data/types';
import { getTodaysQuote } from '../data';


export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getTodaysQuote().then(quotes => {
      setFetchError(false)
      setQuotes(quotes);
      setLoading(false);
    }).catch(error => setFetchError(error))
  }, []);

  return (
    <div>
      {fetchError && <p>There was a problem fetching</p>}
      {isLoading ? 'loading' : 'not loading'}
      <ul>
        {quotes?.map((quote) => (
          <li key={quote.quote}>{quote.quote}</li>
        ))}
      </ul>

    </div>
  );
}