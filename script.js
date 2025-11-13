const movies = document.querySelectorAll('.movie');
const modal = document.getElementById('movie-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRating = document.getElementById('modal-rating');
const modalDuration = document.getElementById('modal-duration');
const modalCompany = document.getElementById('modal-company');
const closeBtn = document.querySelector('.close');
const watchBtn = document.getElementById('watch-btn');
const favoriteBtn = document.getElementById('favorite-btn');

movies.forEach(movie => {
  movie.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = movie.querySelector('img').src;
    modalTitle.textContent = movie.querySelector('h2').textContent;
    modalDescription.textContent = movie.dataset.description;
    modalRating.textContent = `IMDb: ${movie.dataset.rating}`;
    modalDuration.textContent = `Duration: ${movie.dataset.duration}`;
    modalCompany.textContent = `Production: ${movie.dataset.company}`;
  });
});

closeBtn.onclick = () => { modal.style.display = 'none'; };
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; };

// Toggle Light/Dark Mode
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.onclick = () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
};
