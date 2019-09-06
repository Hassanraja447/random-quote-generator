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
let quoteEl = document.createElement("p");
let generateQuoteBtn = document.querySelector("#generate-quote");
let quotesList = document.querySelector(".quotes__list");
generateQuoteBtn.addEventListener("click", () => {
  let randomNumBegin = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomNumMiddle = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomNumEnd = Math.floor(Math.random() * (max - min + 1)) + min;
  let quote = `${quotes.beginning[randomNumBegin]}  ${quotes.middle[randomNumMiddle]} ${quotes.end[randomNumEnd]}`;
  quoteEl = quote;
  quotesList.innerHTML = quoteEl;
});
