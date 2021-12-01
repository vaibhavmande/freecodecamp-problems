import React from "react";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import { QuoteType } from "./App.types";
import { setRandomColorToElement, getRandomBetween } from "./lib/random";
import "./App.css";

function App() {
  const API =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const initialState = {
    quote: "",
    author: "",
  };

  const [quotes, setQuotes] = React.useState<QuoteType[]>([]);
  const [quote, setQuote] = React.useState<QuoteType>(initialState);

  const getRandomQuote = (): QuoteType => {
    const random = Math.round(Math.random() * getRandomBetween(quotesLength));
    return quotes[random] ?? initialState;
  };

  React.useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((quotes) => {
        setQuotes(quotes.quotes);
        setQuote(quotes.quotes[0]);
      })
      .catch((error) => console.error("Unable to fetch quotes", error));
  }, []);

  const quotesLength = React.useMemo(() => quotes.length, [quotes]);

  const setRandomQuote = () => {
    const quote = getRandomQuote();
    setQuote(quote);
  };

  // everytime quote changes change background color
  React.useEffect(() => {
    if (quote.quote === "") return;
    setRandomColorToElement("app");
  }, [quote]);

  return (
    <div className="app" id="app">
      <QuoteBox quote={quote} setRandomQuote={setRandomQuote} />
    </div>
  );
}

export default App;
