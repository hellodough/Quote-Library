import { formatQuotes } from "./helpers";

export const getTodaysQuote = () => 
  fetch(
  '/api/today').then(res => res.json()).then(quotes => formatQuotes(quotes));