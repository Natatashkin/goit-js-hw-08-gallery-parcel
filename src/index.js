import "./css/style.css";
import images from "./js/gallery-items.js";
import { onModalOpen, onChangeLightboxImageUrl } from './js/onOpenModal';
import { getIndex, setLightboxImageRefAttribute, onShowNextImage, onShowPreviousImage } from './js/onModalGallery';
import { onCloseModal, onCloseModalByEsc, onCloseLightboxByClick, onClearlightboxImageRef } from './js/onCloseModal';

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightBoxCloseBtn = document.querySelector(
  '[data-action="close-lightbox"]'
);

const galleryLits = createListItem(images);
galleryRef.insertAdjacentHTML('beforeend', galleryLits);

galleryRef.addEventListener("click", onModalOpen);
lightboxOverlay.addEventListener("click", onCloseLightboxByClick);
lightBoxCloseBtn.addEventListener("click", onCloseModal);

function createListItem (galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}" 
          data-source="${original}" 
          alt="${description}"/>
      </a>
    </li >
    `
  }).join("");
};

function onImageClick(event) {
  event.preventDefault();
  return event.target.dataset.source;
}
