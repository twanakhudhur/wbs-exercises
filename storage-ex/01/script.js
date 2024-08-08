const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
const quoteList = document.getElementById("quoteList");
function loadQuotes() {
  quoteList.innerHTML = "";
  quotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;
    li.className = "p-2 border-b";
    quoteList.appendChild(li);
  });
}

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userInput");
  const newQuote = userInput.value.trim();

  if (newQuote !== "") {
    quotes.unshift(newQuote);
    localStorage.setItem("quotes", JSON.stringify(quotes));

    loadQuotes();
    userInput.value = "";
  }
});

window.addEventListener("load", loadQuotes);

document.getElementById("reload").addEventListener("click", function () {
  window.location.reload();
});
