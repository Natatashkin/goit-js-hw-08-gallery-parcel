export default function onModalOpen(event) {
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

