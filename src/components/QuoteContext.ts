import { createContext } from "react";
import { QuoteDetails } from '../data/types'

const QuoteContext = createContext<Map<number, QuoteDetails>>(new Map());

export default QuoteContext;