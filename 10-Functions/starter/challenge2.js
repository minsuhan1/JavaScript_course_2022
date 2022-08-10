'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const f = function () {
    header.style.color = 'blue';
  };

  document.querySelector('body').addEventListener('click', () => {
    f();
    console.dir(f);
  });
})();
