import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

//Создание и рендер разметки по массиву данных galleryItems

const galleryMarkup = galleryItems.map(({ preview, original, description }) => { 
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}",
        data-source="${original}",
        alt="${description}",
        />
    </a>
</div>`;
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);



const galleryHandler = (event) => { 
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const originalUrl = event.target.dataset.source;
    const originalSize = basicLightbox.create(`
        <img src="${originalUrl}" >
    `)
    originalSize.show();
};

galleryEl.addEventListener("click", galleryHandler);

