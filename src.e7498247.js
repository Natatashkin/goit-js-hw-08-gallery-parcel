parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"amqR":[function(require,module,exports) {

},{"./..\\images\\icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"L4bL":[function(require,module,exports) {
function n(n){return n.map(function(n){var a=n.preview,t=n.original,e=n.description;return'\n    <li class="gallery__item">\n      <a class="gallery__link" href="'.concat(t,'">\n        <img class="gallery__image"\n          src="').concat(a,'" \n          data-source="').concat(t,'" \n          alt="').concat(e,'"/>\n      </a>\n    </li >\n    ')}).join("")}function a(n){return n.preventDefault(),n.target.dataset.source}
},{}],"q66X":[function(require,module,exports) {
"use strict";function e(e){(e.preventDefault(),window.addEventListener("keydown",onCloseModalByEsc),window.addEventListener("keydown",onShowNextImage),window.addEventListener("keydown",onShowPreviousImage),"IMG"===e.target.nodeName)&&(document.querySelector(".is-open")&&lightboxRef.classList.remove("is-open"),lightboxRef.classList.add("is-open"),o(e))}function o(e){lightboxRef.classList.contains("is-open")&&(lightboxImageRef.src=onImageClick(e),lightboxImageRef.alt=e.target.alt)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.onModalOpen=e,exports.onChangeLightboxImageUrl=o;
},{}],"uSrR":[function(require,module,exports) {
"use strict";function e(){return images.findIndex(function(e){return lightboxImageRef.src===e.original})}function t(e){var t=images[e].original,i=images[e].description;lightboxImageRef.setAttribute("src",t),lightboxImageRef.setAttribute("alt",i)}function i(i){if("ArrowRight"===i.code){var o=e();(o+=1)>images.length-1&&(o=0),t(o)}}function o(i){if("ArrowLeft"===i.code){var o=e();0===o&&(o=images.length),t(o-=1)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIndex=e,exports.setLightboxImageRefAttribute=t,exports.onShowNextImage=i,exports.onShowPreviousImage=o;
},{}],"rrvV":[function(require,module,exports) {
"use strict";function e(){window.removeEventListener("keydown",o),lightboxRef.classList.remove("is-open"),r()}function o(o){"Escape"===o.code&&e()}function t(o){o.currentTarget===o.target&&e()}function r(){lightboxImageRef.removeAttribute("src"),lightboxImageRef.removeAttribute("alt")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.onCloseModal=e,exports.onCloseModalByEsc=o,exports.onCloseLightboxByClick=t,exports.onClearlightboxImageRef=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/style.css");var e=s(require("./js/gallery-items.js")),r=require("./js/script"),t=require("./js/onOpenModal"),o=require("./js/onModalGallery"),l=require("./js/onCloseModal");function s(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector(".js-gallery"),i=document.querySelector(".js-lightbox"),n=document.querySelector(".lightbox__overlay"),a=document.querySelector(".lightbox__image"),d=document.querySelector('[data-action="close-lightbox"]'),u=(0,r.createListItem)(e.default);c.insertAdjacentHTML("beforeend",u),c.addEventListener("click",t.onModalOpen),n.addEventListener("click",l.onCloseLightboxByClick),d.addEventListener("click",l.onCloseModal);
},{"./css/style.css":"amqR","./js/gallery-items.js":"q5Rn","./js/script":"L4bL","./js/onOpenModal":"q66X","./js/onModalGallery":"uSrR","./js/onCloseModal":"rrvV"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery-parcel/src.e7498247.js.map