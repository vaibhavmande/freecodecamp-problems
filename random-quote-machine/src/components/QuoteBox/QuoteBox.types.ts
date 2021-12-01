import { QuoteType } from "../../App.types";

export interface QuoteBoxType {
  quote: QuoteType;
  setRandomQuote: () => void;
}
