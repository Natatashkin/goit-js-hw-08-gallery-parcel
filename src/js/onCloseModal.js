export function onCloseModal() {
  window.removeEventListener("keydown", onCloseModalByEsc);
  lightboxRef.classList.remove("is-open");
  onClearlightboxImageRef();
}

export function onCloseModalByEsc(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

export function onCloseLightboxByClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

export function onClearlightboxImageRef() {
  lightboxImageRef.removeAttribute("src");
  lightboxImageRef.removeAttribute("alt");
}
