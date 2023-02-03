const imageEls = document.querySelectorAll('img[loading="lazy"]');

imageEls.forEach(el => {
  el.addEventListener('load', onImageLoad);
});

function onImageLoad(evt) {
  console.log(evt.target);
  evt.target.classList.add('appear');
}
