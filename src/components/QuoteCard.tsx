import { QuoteDetails } from "../data/types";

const QuoteCard = (details: QuoteDetails) => (
  <div className="bg-white px-16 pt-16 rounded-xl font-serif max-h-80 pb-4 max-w-lg lg:max-w-3xl">
    <p className="pb-16 text-3xl">"{details.quote}"</p>
    <div className="flex justify-end">
      <p className="bg-lime-800 text-white rounded-full text-right pr-4 opacity-80 w-1/2">
        - {details.authorName}
      </p>
    </div>
  </div>
);

export default QuoteCard;
