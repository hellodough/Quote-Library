import Link from 'next/link';
import QuoteContext from "../components/QuoteContext";
import { useContext } from "react";

export default function HomePage() {
    const quotes = useContext(QuoteContext);

  return (
    <div>
      <ul>
        {Array.from(quotes.entries()).map(([id, quoteDetails]) => (
          <li key={id}><Link href={`quote/${id}`}>{quoteDetails.quote}</Link></li>
          ))}
      </ul>
    </div>
  );
}