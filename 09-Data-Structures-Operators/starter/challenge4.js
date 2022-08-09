'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textArea = document.querySelector('textarea');

button.addEventListener('click', function () {
  const strData = textArea.value;
  const strDataArr = strData.split('\n');
  // console.log(strDataArr);

  let i = 1;
  for (const data of strDataArr) {
    const temp = data.toLowerCase().trim().split('_');
    const first = temp[0];
    const second = temp[1];
    let ret = first + second.replace(second[0], second[0].toUpperCase());
    ret = ret.padEnd(25, ' ') + '✅'.repeat(i++);

    console.log(ret);
  }
});
