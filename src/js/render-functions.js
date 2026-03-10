import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

export function createGallery(image) {
    const markup = image.map(image =>
        `<li class="gallery-item">
            <div class="image-card">
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}">
                </a>
            

                <div class="info">
                    <p><b>Likes:</b> ${image.likes}</p>
                    <p><b>Views:</b> ${image.views}</p>
                    <p><b>Comments:</b> ${image.comments}</p>
                    <p><b>Downloads:</b> ${image.downloads}</p>
                </div>
            </div>
        </li>
        `)
        .join('');
    
        gallery.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();    
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}