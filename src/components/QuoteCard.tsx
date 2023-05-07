import { QuoteDetails } from "../data/types";

const QuoteCard = (details: QuoteDetails) => (
  <div>
    {details.quote}- {details.authorName}
  </div>
);

export default QuoteCard;
