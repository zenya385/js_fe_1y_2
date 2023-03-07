/*
 * Відкладене завантаження зображень (lazy-loading) (концепция)
  * Ледаче завантаження
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Картинка загрузилась");
  evt.target.classList.add("appear");
}
