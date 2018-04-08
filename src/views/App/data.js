const questions = {
  1: {
    id: 1,
    body: 'How would you like to feel at the end of the day?',
    parentId: null,
    next: [2],
    answer: '',
    idealTime: ''
  },
  2: {
    id: 2,
    body: 'What do you think you need to do to feel that way?',
    parentId: 1,
    answer: '',
    next: [],
    idealTime: ''
  }
};

const getData = () => {
  return new Promise(function(resolve, reject) {
    if (questions !== null) {
      resolve(questions);
    } else {
      reject(Error('Questions not found'));
    }
  });
};

export default getData;
