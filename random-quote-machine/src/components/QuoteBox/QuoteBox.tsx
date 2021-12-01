import QuoteBoxFooter from "../QuoteBoxFooter/QuoteBoxFooter";
import { QuoteBoxType } from "./QuoteBox.types";
import { createTwitterIntent, createTumblrIntent } from "../../lib/intent";
import "./QuoteBox.css";

const QuoteBox = ({ quote, setRandomQuote }: QuoteBoxType): JSX.Element => {
  const twitterShare = createTwitterIntent(quote.quote);
  const tumblrShare = createTumblrIntent(quote.quote, quote.author);

  return (
    <div id="quote-box">
      <div id="text">{quote.quote}</div>
      <p id="author">- {quote.author}</p>
      <QuoteBoxFooter
        setRandomQuote={setRandomQuote}
        intent={{ twitter: twitterShare, tumblr: tumblrShare }}
      />
    </div>
  );
};

export default QuoteBox;
