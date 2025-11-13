// البحث
const searchBtn = document.getElementById('search-btn');
const searchPopup = document.getElementById('search-popup');
const searchInput = document.getElementById('search-input');
const movies = document.querySelectorAll('.movie');

searchBtn.addEventListener('click', () => {
  searchPopup.style.display = (searchPopup.style.display === 'block') ? 'none' : 'block';
});

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  movies.forEach(movie => {
    const title = movie.querySelector('h2').textContent.toLowerCase();
    if (title.includes(query)) {
      movie.style.display = 'flex';
    } else {
      movie.style.display = 'none';
    }
  });
});

// نافذة تفاصيل الفيلم
const detailsPopup = document.getElementById('details-popup');

movies.forEach(movie => {
  movie.addEventListener('click', () => {
    const title = movie.querySelector('h2').textContent;
    const poster = movie.querySelector('img').src;
    const watchLink = movie.querySelector('.watch-btn').getAttribute('data-link') || '#';
    const rating = movie.querySelector('.rating') ? movie.querySelector('.rating').textContent : 'IMDb: N/A';
    const duration = movie.querySelector('.duration') ? movie.querySelector('.duration').textContent : 'Duration: N/A';

    detailsPopup.innerHTML = `
      <img src="${poster}" alt="${title}" style="width:80%; border-radius:10px; margin-bottom:10px;">
      <h2>${title}</h2>
      <p>${rating}</p>
      <p>${duration}</p>
      <a href="${watchLink}" target="_blank">
        <button>مشاهدة</button>
      </a>
      <button onclick="detailsPopup.style.display='none'">إغلاق</button>
    `;
    detailsPopup.style.display = 'block';
  });
});

// التبديل بين الوضع الفاتح والغامق
const toggleDark = () => {
  document.body.classList.toggle('light-mode');
};
