parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"amqR":[function(require,module,exports) {

},{"./..\\images\\icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"yC1B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lightBoxCloseBtn=exports.lightboxImageRef=exports.lightboxOverlay=exports.lightboxRef=exports.galleryRef=void 0;var e=document.querySelector(".js-gallery");exports.galleryRef=e;var o=document.querySelector(".js-lightbox");exports.lightboxRef=o;var t=document.querySelector(".lightbox__overlay");exports.lightboxOverlay=t;var r=document.querySelector(".lightbox__image");exports.lightboxImageRef=r;var l=document.querySelector('[data-action="close-lightbox"]');exports.lightBoxCloseBtn=l;
},{}],"AFn3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createListItem=a,exports.galleryLits=void 0;var e=r(require("./gallery-items.js"));function r(e){return e&&e.__esModule?e:{default:e}}var t=a(e.default);function a(e){return e.map(function(e){var r=e.preview,t=e.original,a=e.description;return'\n    <li class="gallery__item">\n      <a class="gallery__link" href="'.concat(t,'">\n        <img class="gallery__image"\n          src="').concat(r,'" \n          data-source="').concat(t,'" \n          alt="').concat(a,'"/>\n      </a>\n    </li >\n    ')}).join("")}exports.galleryLits=t;
},{"./gallery-items.js":"q5Rn"}],"Focm":[function(require,module,exports) {
"use strict";require("./css/style.css");var e=i(require("./js/gallery-items.js")),t=require("./js/selectors"),n=require("./js/create-listitem");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.preventDefault(),e.target.dataset.source}function o(e){(e.preventDefault(),window.addEventListener("keydown",u),window.addEventListener("keydown",c),window.addEventListener("keydown",d),"IMG"===e.target.nodeName)&&(document.querySelector(".is-open")&&t.lightboxRef.classList.remove("is-open"),t.lightboxRef.classList.add("is-open"),s(e))}function s(e){t.lightboxRef.classList.contains("is-open")&&(t.lightboxImageRef.src=r(e),t.lightboxImageRef.alt=e.target.alt)}function a(){return e.default.findIndex(function(e){return t.lightboxImageRef.src===e.original})}function l(n){var i=e.default[n].original,r=e.default[n].description;t.lightboxImageRef.setAttribute("src",i),t.lightboxImageRef.setAttribute("alt",r)}function c(t){if("ArrowRight"===t.code){var n=a();(n+=1)>e.default.length-1&&(n=0),l(n)}}function d(t){if("ArrowLeft"===t.code){var n=a();0===n&&(n=e.default.length),l(n-=1)}}function f(){window.removeEventListener("keydown",u),t.lightboxRef.classList.remove("is-open"),v()}function u(e){"Escape"===e.code&&f()}function g(e){e.currentTarget===e.target&&f()}function v(){t.lightboxImageRef.removeAttribute("src"),t.lightboxImageRef.removeAttribute("alt")}t.galleryRef.insertAdjacentHTML("beforeend",n.galleryLits),t.galleryRef.addEventListener("click",o),t.lightboxOverlay.addEventListener("click",g),t.lightBoxCloseBtn.addEventListener("click",f);
},{"./css/style.css":"amqR","./js/gallery-items.js":"q5Rn","./js/selectors":"yC1B","./js/create-listitem":"AFn3"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery-parcel/src.ec2cd895.js.map