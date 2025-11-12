// البحث
const searchInput = document.getElementById('search');
const movies = document.querySelectorAll('.movie');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  let found = false;
  movies.forEach(movie => {
    const title = movie.querySelector('h2').innerText.toLowerCase();
    if(title.includes(query)){
      movie.style.display = 'block';
      found = true;
    } else {
      movie.style.display = 'none';
    }
  });
  if(!found && query !== ''){
    alert('Please make sure the name is correct');
  }
});

// المفضلات
const favoriteButtons = document.querySelectorAll('.favorite');
favoriteButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const movieTitle = this.parentElement.querySelector('h2').innerText;
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(!favorites.includes(movieTitle)){
      favorites.push(movieTitle);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(movieTitle + ' added to favorites');
    }
  });
});

// تكبير الصورة عند الضغط
movies.forEach(movie => {
  const img = movie.querySelector('img');
  img.addEventListener('click', function() {
    img.style.transform = 'scale(1.2)';
    setTimeout(() => { img.style.transform = 'scale(1)'; }, 500);
  });
});