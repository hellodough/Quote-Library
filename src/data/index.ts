import { formatQuotes } from "./helpers";

export const getTodaysQuote = () => 
  fetch(
  '/api/today').then(res => res.json()).then(quotes => formatQuotes(quotes));

export const getQuotes = () => 
  fetch(
  '/api/quotes').then(res => res.json()).then(quotes => formatQuotes(quotes));

export const getRandomQuotes = () => 
  fetch(
  '/api/random').then(res => res.json()).then(quotes => formatQuotes(quotes));
