
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryImages = galleryItems.map(({preview, original, description}) => 
   `<a class="gallery__item" href="${original}">
            <img class = "gallery__image" src = "${preview}" alt="${description}"/>
    </a>`
).join("");

galleryList.insertAdjacentHTML('beforeend', galleryImages);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	
});