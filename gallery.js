const posts = [];
const images = [
  'images/gallery/g-1.jpg',
  'images/gallery/g-2.jpg',
  'images/gallery/g-3.jpg',
  'images/gallery/g-4.jpg',
  'images/gallery/g-5.jpg',
  'images/gallery/g-6.jpg',
  'images/gallery/g-7.jpg',
  'images/gallery/g-8.jpg',
  'images/gallery/g-9.jpg',
  'images/gallery/g-10.jpg',
  'images/gallery/g-11.jpg',
  'images/gallery/g-12.jpg',
  'images/gallery/g-13.jpg',
  'images/gallery/g-14.jpg',
  'images/gallery/g-15.jpg',
];

let imageIndex = 0;

for (let i = 1; i <= 30; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
