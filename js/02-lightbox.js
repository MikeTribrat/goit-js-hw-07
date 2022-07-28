import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

//Создание и рендер разметки по массиву данных galleryItems

const galleryMarkup = galleryItems.map(({ preview, original, description }) => { 
    return `<div class="gallery__list">
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}", alt="${description}",/>
    </a>
</div>`;
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

//Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery

const lightboxGallery = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionDelay: 250,
    
});

