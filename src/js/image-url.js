import { lightboxRef, lightboxImageRef } from './selectors';

export function onImageClick(event) {
  event.preventDefault();
  return event.target.dataset.source;
}

export function onChangeLightboxImageUrl(event) {
    if (lightboxRef.classList.contains("is-open")) {
        lightboxImageRef.src = onImageClick(event);
        lightboxImageRef.alt = event.target.alt;
    }
}