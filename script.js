let quotes = {
  beginning: [
    "Don't bother yourself",
    "Something you missed",
    "It is always",
    "Not today you will",
    "Love is always",
    "Ever happened with your"
  ],
  middle: [
    "would never",
    "ever happen",
    "to get hard on yourself",
    "in life",
    "you will see",
    "in depth"
  ],
  end: [
    "time will come.",
    "to be sure.",
    "again.",
    "be youself.",
    "your time will come.",
    "with life long."
  ]
};
let min = 0;
let max = 5;
let numberOfQuotes = 1;
let generateQuoteBtn = document.querySelector("#generate-quote");
let quotesList = document.querySelector(".quotes__list");
let quotesListContainer = document.querySelector(".quotes__container");
/// generateRandomNumber
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateQuote = () => {
  let quoteEl = document.createElement("li");
  quoteEl.innerHTML = `${quotes.beginning[generateRandomNumber()]}  ${
    quotes.middle[generateRandomNumber()]
  } ${quotes.end[generateRandomNumber()]}`;
  return quoteEl;
};
/// Function to generate quotes by joining three sentence fragments
const getQuotes = numberOfQuotes => {
  console.log(numberOfQuotes);
  // if(numberOfQuotes === 1) {
  //   quoteEl = `${quotes.beginning[generateRandomNumber()]}  ${
  //     quotes.middle[generateRandomNumber()]
  //     } ${quotes.end[generateRandomNumber()]}`;
  //   quotesList.appendChild(quoteEl);
  //   return quotesList;
  // }
  // if (numberOfQuotes > 1) {
  for (let i = 0; i < numberOfQuotes; i++) {
    quotesList.appendChild(generateQuote());
  }
  return quotesList;
  // }
};
let dropdown = document.querySelector("#quotesCount");
dropdown.addEventListener("change", e => {
  numberOfQuotes = e.target.value;
});

/// Button to generate quotes on click
generateQuoteBtn.addEventListener("click", () => {
  quotesList.innerHTML = "";
  quotesListContainer.appendChild(getQuotes(numberOfQuotes));
});
