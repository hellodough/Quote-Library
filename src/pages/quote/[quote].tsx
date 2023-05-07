import { useRouter } from "next/router";
import QuoteContext from "../../components/QuoteContext";
import { useContext } from "react";
import QuoteCard from '../../components/QuoteCard';
import Navigation from "../../components/Navigation";

const QuotePage = () => {
    const quotes = useContext(QuoteContext);
    const router = useRouter();

    if(router.query.quote) {
        const quoteDetails = quotes.get(parseInt(router.query.quote, 10))
        if(quoteDetails) {
            return (<><Navigation/><QuoteCard {...quoteDetails}/></>)
        }
        return `quote not found for id ${router.query.quote}`
    }
    return 'id not found';

}

export default QuotePage;