const QuoteCardPreview = ({
  authorName,
  quote,
}: {
  authorName: string;
  quote: string;
}) => (
  <div className="hover:bg-lime-800 hover:bg-opacity-75 hover:text-white px-5 pt-5 pb-4 border-solid border-2 rounded-lg border-lime-800 max-w-xs h-56 flex flex-col justify-between">
    <div className="text-2xl truncate font-serif">
    {quote}
    </div>
    <div className="bg-lime-800 text-white rounded-full text-right pr-4 opacity-80 mt-7">{authorName}</div>
  </div>
);

export default QuoteCardPreview;
