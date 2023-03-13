'use strict';

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};

let curImage;
const loadNPause = async function () {
  try {
    // load img 1
    let img = await createImage('img/img-1.jpg');
    console.log('img 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // load img 2
    img = await createImage('img/img-2.jpg');
    console.log('img 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  // const imgs = imgArr.map(path => createImage(path));
  // console.log(imgs);
  try {
    const imgs = imgArr.map(
      // async function(img) {
      //   return await createImage(img)
      // }
      async img => await createImage(img)
    );
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
