// عرض التفاصيل عند الضغط على صورة الفيلم مع تأخير بسيط
const movieImages = document.querySelectorAll('.movie-img');
movieImages.forEach(img => {
  img.addEventListener('click', function() {
    const details = this.parentElement.querySelector('.details');
    if(details.style.display === 'none' || details.style.display === ''){
      setTimeout(() => { details.style.display = 'block'; }, 200);
    } else {
      details.style.display = 'none';
    }
  });
});

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
    alert('من فضلك تأكد من أن الاسم صحيح');
  }
});

// المفضلة
const favoriteButtons = document.querySelectorAll('.favorite');
favoriteButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const movieTitle = this.parentElement.querySelector('h2').innerText;
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(!favorites.includes(movieTitle)){
      favorites.push(movieTitle);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(movieTitle + ' تم إضافته إلى المفضلة');
    }
  });
});

// زر "شاهد الآن"
const watchButtons = document.querySelectorAll('.watch');
watchButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const link = btn.dataset.link;
    window.open(link, '_blank');
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

// تبديل الوضع الفاتح/الغامق
const toggleDark = document.getElementById('toggle-dark');
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
