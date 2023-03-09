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
createImage('img/img-1.jpg')
  .then(res => {
    curImage = res;
    console.log('Img 1 loaded');
    return wait(2);
  })
  .then(() => {
    curImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(res => {
    curImage = res;
    console.log('Img 2 loaded');
    return wait(2);
  })
  .then(() => {
    curImage.style.display = 'none';
  })
  .catch(err => console.error(err));
