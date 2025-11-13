const movies = document.querySelectorAll(".movie");
movies.forEach(movie => {
  const img = movie.querySelector("img");
  const details = movie.querySelector(".details");

  img.addEventListener("click", () => {
    // Toggle details visibility
    details.style.display = details.style.display === "flex" ? "none" : "flex";
  });
});

// Search toggle (by clicking the search icon)
const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", () => {
  const searchTerm = prompt("أدخل اسم الفيلم للبحث:");
  if (!searchTerm) return;

  let found = false;
  movies.forEach(movie => {
    const title = movie.querySelector("h2").textContent;
    if (title.includes(searchTerm)) {
      movie.scrollIntoView({ behavior: "smooth" });
      found = true;
    }
  });

  if (!found) alert("من فضلك تأكد من أن الاسم صحيح");
});
