'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  // 1.
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (answer >= 0 && answer <= 3) this.answers[answer]++;

    // 4.
    this.displayResults();
    this.displayResults('string');
  },

  // 3.
  displayResults(type = 'array') {
    console.log(
      type === 'string'
        ? `Poll results are ${[...this.answers.values()]}`
        : this.answers
    );
  },
};

// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 5. call의 첫 번째 인자로 answers 속성을 갖는 객체를 전달 -> poll.displayResults 메서드의 this가 인자로 전달한 객체를 가리키게 함
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
