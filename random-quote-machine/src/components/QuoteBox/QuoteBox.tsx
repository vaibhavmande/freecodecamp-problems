import QuoteBoxFooter from "../QuoteBoxFooter/QuoteBoxFooter";
import "./QuoteBox.css";

const QuoteBox = () => {
  return (
    <div id="quote-box">
      <div id="text">This is some quote</div>
      <p id="author">- Some Name</p>
      <QuoteBoxFooter />
    </div>
  );
};

export default QuoteBox;
