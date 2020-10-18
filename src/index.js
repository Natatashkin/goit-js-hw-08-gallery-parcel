import "./css/style.css";
import images from "./js/gallery-items.js";
import { createListItem, onImageClick } from './js/script';
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

