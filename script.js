AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const Xme = document.getElementById("Xme");
const api = "https://type.fit/api/quotes";
let dataconverted = "";
let finalQuote = "";
const Xnow = () => {
  let Xpost = `https://twitter.com/intent/tweet?text= Quote : ${finalQuote.text} and Author : ${finalQuote.author}`; //web intent url

  window.open(Xpost);
  //e.g.window.open("https://www.youtube.com");
};

const getNewRandomQuotes = () => {
  let rnum = Math.floor(Math.random() * 10);
  finalQuote = dataconverted[rnum];
  quotes.innerText = `Quote: ${finalQuote.text} `;
  if (finalQuote.author == null) {
    author.innerText = `Author : unknown`;
  } else {
    author.innerText = `Author : ${finalQuote.author}`;
  }
};
const generateQuotes = async () => {
  try {
    let data = await fetch(api);
    dataconverted = await data.json();
    getNewRandomQuotes();
  } catch (err) {}
};
newQ.addEventListener("click", getNewRandomQuotes);
Xme.addEventListener("click", Xnow);
generateQuotes();
