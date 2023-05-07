import { QuoteDetails } from "../data/types";

const QuoteCard = (details: QuoteDetails) => (
  <div className="bg-white px-16 pt-16 rounded-xl font-serif pb-4 max-w-lg lg:max-w-3xl flex flex-col justify-end">
    <p className="pb-4 text-3xl flex-grow">"{details.quote}"</p>
    <div className="flex justify-end">
      <p className="bg-lime-800 text-white rounded-full text-right mt-16 pr-4 opacity-80 w-1/2">
        - {details.authorName}
      </p>
    </div>
  </div>
);

export default QuoteCard;
