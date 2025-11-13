// التبديل بين الوضع الغامق والفاتح
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// فتح وغلق البحث
const searchToggle = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
searchToggle.addEventListener('click', () => {
  searchContainer.style.display = searchContainer.style.display === 'flex' ? 'none' : 'flex';
});

// البحث عن الأفلام
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    const title = movie.querySelector('h2').textContent.toLowerCase();
    movie.style.display = title.includes(filter) ? 'flex' : 'none';
  });
});

// نافذة تفاصيل الفيلم
const movieDetail = document.getElementById('movie-detail');
const detailPoster = document.getElementById('detail-poster');
const detailTitle = document.getElementById('detail-title');
const detailRating = document.getElementById('detail-rating');
const detailDuration = document.getElementById('detail-duration');
const detailCompany = document.getElementById('detail-company');
const detailWatch = document.getElementById('detail-watch');

document.querySelectorAll('.movie img, .movie h2').forEach(el => {
  el.addEventListener('click', (e) => {
    const movie = el.closest('.movie');
    const poster = movie.querySelector('.movie-poster').src;
    const title = movie.querySelector('h2').textContent;
    const btn = movie.querySelector('.watch-btn');
    detailPoster.src = poster;
    detailTitle.textContent = title;
    detailRating.textContent = `IMDb: ${btn.dataset.rating}`;
    detailDuration.textContent = `المدة: ${btn.dataset.duration}`;
    detailCompany.textContent = `الشركة: ${btn.dataset.company}`;
    detailWatch.onclick = () => window.open(btn.dataset.link, '_blank');
    movieDetail.classList.remove('hidden');
  });
});

document.getElementById('close-detail').addEventListener('click', () => {
  movieDetail.classList.add('hidden');
});
