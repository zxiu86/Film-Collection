function toggleMode() {
  document.body.classList.toggle("light");
  document.querySelector('.toggle-btn').textContent = document.body.classList.contains("light") ? "☀" : "🌙";
}

// تفاصيل الفلم
function showDetails(movieElement) {
  const title = movieElement.querySelector("h2").textContent;
  document.getElementById("detail-title").textContent = title;
  document.getElementById("detail-rating").textContent = "IMDb: 7.5"; // ضع تقييم الفلم
  document.getElementById("detail-duration").textContent = "المدة: 120 دقيقة"; // مدة الفلم
  document.getElementById("movie-details").classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("movie-details").classList.add("hidden");
}

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
