// const imageEls = document.querySelectorAll('img[data-src]');

// imageEls.forEach(el => {
//   el.addEventListener('load', onImageLoad);
// });

// function onImageLoad(evt) {
//   console.log(evt.target);
//   evt.target.classList.add('appear');
// }


if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
} else {
  // fetch polyfill/third-party library
}