import Link from "next/link";
import QuoteContext from "../components/QuoteContext";
import QuoteCardPreview from "../components/QuoteCardPreview";
import { useContext } from "react";

export default function HomePage() {
  const quotes = useContext(QuoteContext);

  return (
    <div>
      <h1 className="text-xl text-center pb-14 pt-8">Zen Quotes</h1>
      <div className="flex gap-14 flex-wrap justify-center px-2 md:px-4 lg:px-20">
        {Array.from(quotes.entries()).map(([id, quoteDetails]) => (
          <Link href={`quote/${id}`} key={id}>
            <QuoteCardPreview
              quote={quoteDetails.quote}
              authorName={quoteDetails.authorName}
            />
          </Link>
        ))}
      </div>

      {quotes.size === 0 && 'No quotes found'}
    </div>
  );
}
