let loveQuotes = {
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
let motivationQuotes = {
  beginning: [
    "Love is life",
    "You don't have to do ",
    "Work hard until",
    "No one ever has a chance",
    "In your entire life",
    "Danger in life and life "
  ],
  middle: [
    "coming to end",
    "since than",
    "to get hard on yourself",
    "in life",
    "you will see",
    "fafe and tagpe"
  ],
  end: [
    "fafe adfe.",
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
let radioBtn = document.getElementsByName("type");
let generateQuoteBtn = document.querySelector("#generate-quote");
let resetBtn = document.querySelector("#resetBtn");
let quotesList = document.querySelector(".quotes__list");
let quotesListContainer = document.querySelector(".quotes__container");
/// generateRandomNumber
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateQuote = quotes => {
  let quoteEl = document.createElement("li");
  quoteEl.classList.add("quotes__item");
  quoteEl.innerHTML = `${quotes.beginning[generateRandomNumber()]}  ${
    quotes.middle[generateRandomNumber()]
  } ${quotes.end[generateRandomNumber()]}`;
  return quoteEl;
};
/// Function to generate quotes by joining three sentence fragments
const getQuotes = (numberOfQuotes, quotes) => {
  for (let i = 0; i < numberOfQuotes; i++) {
    quotesList.appendChild(generateQuote(quotes));
  }
  return quotesList;
};
let dropdown = document.querySelector("#quotesCount");
dropdown.addEventListener("change", e => {
  numberOfQuotes = e.target.value;
});

/// Button to generate quotes on click
generateQuoteBtn.addEventListener("click", () => {
  quotesList.innerHTML = "";
  quotesListContainer.classList.add("height");
  if (radioBtn[1].checked) {
    quotesListContainer.appendChild(
      getQuotes(numberOfQuotes, motivationQuotes)
    );
  } else {
    quotesListContainer.appendChild(getQuotes(numberOfQuotes, loveQuotes));
  }
});

// Reset quotes DOM
resetBtn.addEventListener("click", () => {
  quotesList.innerHTML = "";
  quotesListContainer.classList.remove("height");
});
