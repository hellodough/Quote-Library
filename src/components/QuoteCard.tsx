import { QuoteDetails } from "../data/types";

const QuoteCard = (details: QuoteDetails) => (
  <div className="bg-white px-16 pt-16 rounded-xl font-serif max-h-80">
    <div className="pb-16 text-3xl">"{details.quote}"</div>
    <div className="bg-lime-800 text-white rounded-full text-right pr-4 opacity-80 mb-8">{details.authorName}</div>
  </div>
);

export default QuoteCard;
