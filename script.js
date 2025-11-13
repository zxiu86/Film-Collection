const searchIcon = document.getElementById("search-icon");
const searchPopup = document.getElementById("search-popup");
const closeSearch = document.getElementById("close-search");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {
  searchPopup.classList.add("show");
  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchPopup.classList.remove("show");
});

// وضع الليل/النهار (غامق/فاتح)
function toggleMode() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "#0d0d0d";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
