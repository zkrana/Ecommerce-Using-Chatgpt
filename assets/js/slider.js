// Get the slider images and buttons
const sliderImages = document.querySelectorAll('#banner-slider .slider-image');
const prevButton = document.querySelector('#slider-prev');
const nextButton = document.querySelector('#slider-next');

// Set the index of the currently active image
let currentImageIndex = 0;

// Show the first image by default
sliderImages[currentImageIndex].classList.add('active');

// Define function to hide all images except the current one
function hideImages() {
  sliderImages.forEach((image) => {
    image.classList.remove('active');
  });
}

// Define function to show the current image
function showCurrentImage() {
  sliderImages[currentImageIndex].classList.add('active');
}

// Define function to show the previous image
function showPrevImage() {
  hideImages();
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = sliderImages.length - 1;
  }
  showCurrentImage();
}

// Define function to show the next image
function showNextImage() {
  hideImages();
  currentImageIndex++;
  if (currentImageIndex >= sliderImages.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Autoplay the slider
setInterval(showNextImage, 5000);


const selectCategory = document.querySelector('#filter-category');

selectCategory.addEventListener('change', (event) => {
  const products = document.querySelectorAll('.product');
  const selectedCategory = event.target.value;

  products.forEach((product) => {
    if (selectedCategory === 'all') {
      product.style.display = 'block';
    } else if (product.dataset.category === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});



const loginBtn = document.querySelector('.login-btn');
const loginPopup = document.querySelector('.login-popup');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});
