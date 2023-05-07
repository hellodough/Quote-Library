// index.html
import { useEffect, useState } from 'react';
import { QuoteList } from '../data/types';
import { getQuotes } from '../data';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function HomePage() {
  const [quotes, setQuotes] = useState<QuoteList | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setLoading(true);
    getQuotes().then(quotes => {
      setFetchError(false)
      setQuotes(quotes);
      setLoading(false);
    }).catch(error => setFetchError(error))
  }, []);
  if(fetchError) return  <p>There was a problem fetching</p>
  if(isLoading) return  'loading';
if(quotes) {

  return (
    <div>
      <ul>
        {Object.entries(quotes).map(([id, quoteDetails]) => (
          <li key={id}><Link href={`quote/${id}`}>{quoteDetails.quote}</Link></li>
          ))}
      </ul>

    </div>
  );
}
return 'something is wrong'
}