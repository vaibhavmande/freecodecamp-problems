import QuoteBoxFooter from "../QuoteBoxFooter/QuoteBoxFooter";
import { QuoteBoxType } from "./QuoteBox.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { createTwitterIntent, createTumblrIntent } from "../../lib/intent";
import "./QuoteBox.css";

const QuoteBox = ({ quote, setRandomQuote }: QuoteBoxType): JSX.Element => {
  const twitterShare = createTwitterIntent(quote.quote);
  const tumblrShare = createTumblrIntent(quote.quote, quote.author);

  return (
    <div id="quote-box">
      <div id="text">
        <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
        <p data-testid="quote">{quote.quote}</p>
      </div>
      <p id="author">
        <span aria-hidden="true">-</span> {quote.author}
      </p>
      <QuoteBoxFooter
        setRandomQuote={setRandomQuote}
        intent={{ twitter: twitterShare, tumblr: tumblrShare }}
      />
    </div>
  );
};

export default QuoteBox;
