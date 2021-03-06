import "./css/style.css";
import images from "./js/gallery-items.js";
import { galleryRef, lightboxRef, lightboxOverlay, lightboxImageRef, lightBoxCloseBtn } from './js/selectors';
import { galleryLits, createListItem } from './js/create-listitem';
import { onImageClick, onChangeLightboxImageUrl } from './js/image-url';
galleryRef.insertAdjacentHTML('beforeend', galleryLits);

galleryRef.addEventListener('click', onModalOpen);
lightboxOverlay.addEventListener("click", onCloseLightboxByClick);
lightBoxCloseBtn.addEventListener("click", onCloseModal);

function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener("keydown", onCloseModalByEsc);
  window.addEventListener("keydown", onShowNextImage);
    window.addEventListener("keydown", onShowPreviousImage);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const currentActiveImage = document.querySelector(".is-open");
  if (currentActiveImage) {
    lightboxRef.classList.remove("is-open");
  }

  lightboxRef.classList.add("is-open");
  onChangeLightboxImageUrl(event);
}

function getIndex() {
    return images.findIndex(elem => lightboxImageRef.src === elem.original);
}

function setLightboxImageRefAttribute(index) {
  const nextImageSrc = images[index].original;
  const nextImageAlt = images[index].description;
  lightboxImageRef.setAttribute("src", nextImageSrc);
  lightboxImageRef.setAttribute("alt", nextImageAlt);
}
  
function onShowNextImage(event) {
  if (!(event.code === "ArrowRight")) {
    return;
  }

  let currentImageIndex = getIndex();

  currentImageIndex += 1;
   if (currentImageIndex >images.length-1) {
     currentImageIndex = 0;
  }

  setLightboxImageRefAttribute(currentImageIndex);

}
function onShowPreviousImage(event) {
if (!(event.code === "ArrowLeft")) {
    return;
  }

  let currentImageIndex = getIndex();

   if (currentImageIndex === 0) {
     currentImageIndex = images.length;
  } 
  currentImageIndex -= 1;

   setLightboxImageRefAttribute(currentImageIndex);

}

function onCloseModal() {
  window.removeEventListener("keydown", onCloseModalByEsc);
  lightboxRef.classList.remove("is-open");
  onClearlightboxImageRef();
}

function onCloseModalByEsc(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onCloseLightboxByClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onClearlightboxImageRef() {
  lightboxImageRef.removeAttribute("src");
  lightboxImageRef.removeAttribute("alt");
}

