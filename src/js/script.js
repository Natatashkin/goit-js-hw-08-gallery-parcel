
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
