const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    // Add more quotes to the array
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote(quote) {
    const quoteTextElement = document.getElementById("quote-text");
    const quoteAuthorElement = document.getElementById("quote-author");
    quoteTextElement.textContent = quote.text;
    quoteAuthorElement.textContent = "- " + quote.author;
  }
  
  const newQuoteButton = document.getElementById("new-quote-button");
  newQuoteButton.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
  });
  
  // Display an initial quote when the page loads
  const initialQuote = getRandomQuote();
  displayQuote(initialQuote);
  