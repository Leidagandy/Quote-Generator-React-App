import React, { useState, useEffect } from "react";

export default function DisplayQuote() {
  const [quotes, setQuotes] = useState();
  const [nextQuote, setNextQuote] = useState();

  useEffect(() => {
    fetch(`https://leida-quote-server.glitch.me/quotes`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  function pickFromArray(quotesArr) {
    return quotesArr[Math.floor(Math.random() * quotesArr.length)];
  }

  function pickNextQuote() {
    setNextQuote(pickFromArray(quotes));
  }

  if (!quotes) {
    return <div>Loading...</div>;
  } else {
    return (
      <div class="container">
        <blockquote onClick={pickNextQuote}>
          {nextQuote ? nextQuote.quote : pickFromArray(quotes).quote}
        </blockquote>
        <cite>
          {nextQuote ? nextQuote.author : pickFromArray(quotes).author}
        </cite>
        <div className="btn-div">
          <button className="btn" onClick={pickNextQuote}>
            Show a new quote
          </button>
        </div>
      </div>
    );
  }
}
