export function getIndex() {
    return images.findIndex(elem => lightboxImageRef.src === elem.original);
}

export function setLightboxImageRefAttribute(index) {
  const nextImageSrc = images[index].original;
  const nextImageAlt = images[index].description;
  lightboxImageRef.setAttribute("src", nextImageSrc);
  lightboxImageRef.setAttribute("alt", nextImageAlt);
}
  
export function onShowNextImage(event) {
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
export function onShowPreviousImage(event) {
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
