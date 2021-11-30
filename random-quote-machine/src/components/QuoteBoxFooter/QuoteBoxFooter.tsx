import Actionable from "../Actionable/Actionable";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import "./QuoteBoxFooter.css";

const QuoteBoxFooter: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <Actionable variant="a" icon={faTwitter} id="tweet-quote" />
        <Actionable variant="a" icon={faTumblr} />
      </div>
      <div className="right">
        <Actionable variant="button" text="New quote" />
      </div>
    </div>
  );
};

export default QuoteBoxFooter;
