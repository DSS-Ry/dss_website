import skyline from '../dist/images/skyline.png';

const imageSources = [
  'images/logo_drop.svg',
  'images/logo_text.svg',
  'images/dss_hero.jpg',
  skyline,
  'images/sloan/sloan1.jpeg',
  'images/sloan/sloan2.jpg',
  'images/sloan/sloan3.jpg',
  'images/sloan/sloan4.jpg',
  'images/manufacturer_logos.png'
];

// Keep the requests alive and let rendered images reuse the browser cache.
const preloadedImages = [];

export default function preloadImages() {
  if (preloadedImages.length) return;

  imageSources.forEach((src) => {
    const image = new Image();
    image.src = src;
    preloadedImages.push(image);
  });
}
