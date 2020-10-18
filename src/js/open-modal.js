import { lightboxRef, onShowNextImage, onShowPreviousImage, onCloseModalByEsc, lightboxImageRef } from '../index';


export function onModalOpen(event) {
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

export function onChangeLightboxImageUrl(event) {
    if (lightboxRef.classList.contains("is-open")) {
        lightboxImageRef.src = onImageClick(event);
        lightboxImageRef.alt = event.target.alt;
    }
}

export function onImageClick(event) {
  event.preventDefault();
  return event.target.dataset.source;
}
