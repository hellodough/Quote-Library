import { formatQuotes } from "./helpers";

export const getQuotes = () => 
  fetch(
  '/api/quotes').then(res => res.json()).then(quotes => formatQuotes(quotes));
