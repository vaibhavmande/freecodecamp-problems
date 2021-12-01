import Actionable from "../Actionable/Actionable";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { QuoteType } from "../../App.types";
import "./QuoteBoxFooter.css";

interface Intent {
  twitter: string;
  tumblr: string;
}

interface Props {
  setRandomQuote: () => void;
  intent: Intent;
}

const QuoteBoxFooter = ({ setRandomQuote, intent }: Props): JSX.Element => {
  return (
    <div className="footer-container">
      <div className="left">
        <Actionable
          variant="a"
          icon={faTwitter}
          id="tweet-quote"
          intent={intent.twitter}
        />
        <Actionable variant="a" icon={faTumblr} intent={intent.tumblr} />
      </div>
      <div className="right">
        <Actionable
          id="new-quote"
          variant="button"
          text="New quote"
          onClick={setRandomQuote}
        />
      </div>
    </div>
  );
};

export default QuoteBoxFooter;
