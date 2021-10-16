const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quoteAuthor");
const newBtn = document.getElementById("newBtn");
const api = "https://type.fit/api/quotes";
let data = ""
let loadedData = ""

async function onLoad() {
    data = await fetch(api);
    loadedData = await data.json();
    getNew();
}

async function getNew() {
    quoteNum = Math.floor(Math.random() * loadedData.length+1);
    quote.innerHTML = loadedData[quoteNum].text;
    if(loadedData[quoteNum].author == null) {
        quoteAuthor.innerHTML ="- "+"Unknown";
    }else {
        quoteAuthor.innerHTML ="- " + loadedData[quoteNum].author;
    }
}

newBtn.addEventListener("click", getNew);
onLoad();