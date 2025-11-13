// ==== بيانات الأفلام ====
const movies = [
  {
    name: "فيلم الاختبار",
    image: "test1.jpg",
    description: "هذا وصف فيلم الاختبار.",
    rating: "IMDb: 7.5",
    duration: "120 دقيقة",
    company: "استوديو 1",
    link: "https://example.com"
  },
  {
    name: "فيلم الاختبار 2",
    image: "test2.jpg",
    description: "وصف الفيلم الثاني.",
    rating: "IMDb: 8.2",
    duration: "110 دقيقة",
    company: "استوديو 2",
    link: "https://example.com"
  }
];

// ==== فتح pop-up عند الضغط على صورة ====
const moviesListDiv = document.getElementById('movies-list');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const popupRating = document.getElementById('popup-rating');
const popupDuration = document.getElementById('popup-duration');
const popupCompany = document.getElementById('popup-company');
const popupLink = document.getElementById('popup-link');
const closePopup = document.getElementById('close-popup');

moviesListDiv.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG'){
    const movieDiv = e.target.parentElement;
    const name = movieDiv.querySelector('h2').innerText;
    const movieData = movies.find(m => m.name === name);
    if(movieData){
      popupTitle.innerText = movieData.name;
      popupImage.src = movieData.image;
      popupDescription.innerText = movieData.description;
      popupRating.innerText = movieData.rating;
      popupDuration.innerText = movieData.duration;
      popupCompany.innerText = movieData.company;
      popupLink.href = movieData.link;
      popup.style.display = "flex";
    }
  }
});

// ==== إغلاق pop-up ====
closePopup.addEventListener('click', () => {
  popup.style.display = "none";
});

// ==== البحث ====
const searchIcon = document.getElementById('search-icon');
searchIcon.addEventListener('click', () => {
  const query = prompt("اكتب اسم الفيلم للبحث:");
  if (query) {
    const movie = movies.find(m => m.name === query);
    if(movie){
      popupTitle.innerText = movie.name;
      popupImage.src = movie.image;
      popupDescription.innerText = movie.description;
      popupRating.innerText = movie.rating;
      popupDuration.innerText = movie.duration;
      popupCompany.innerText = movie.company;
      popupLink.href = movie.link;
      popup.style.display = "flex";
    } else {
      alert("من فضلك تأكد من أن الاسم صحيح");
    }
  }
});