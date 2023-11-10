// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './helpers';

const container = document.querySelector('.gallery');
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});