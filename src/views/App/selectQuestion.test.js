import selectQuestion from './selectQuestion';

const sampleQuestions = {
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
  },
  3: {
    id: 3,
    body: 'Do you think you met your expectation today?',
    parentId: null,
    answer: '',
    next: [],
    idealTime: ''
  },
  4: {
    id: 4,
    body: 'How could you have made your day better today?',
    parentId: null,
    answer: '',
    next: [],
    idealTime: ''
  }
};

describe('getSelectedQuestion', () => {
  test('selects a question at random on every call', () => {
    const first = selectQuestion(sampleQuestions);
    const second = selectQuestion(sampleQuestions);

    expect(first).not.toEqual(second);
  });

  test('does not select any question with an unanswered parent', () => {
    const first = selectQuestion(sampleQuestions);
    const second = selectQuestion(sampleQuestions);
    const third = selectQuestion(sampleQuestions);

    expect(first.parentId).toBeNull();
    expect(second.parentId).toBeNull();
    expect(third.parentId).toBeNull();
  })

  test('selects next question if selected question is answered', () => {
    const newSampleQuestions = { 1: sampleQuestions['1'], 2: sampleQuestions['2'] };
    newSampleQuestions['1'].answer = 'Some answer';

    const first = selectQuestion(sampleQuestions);
    const second = selectQuestion(sampleQuestions);
    const third = selectQuestion(sampleQuestions);

    expect(first.id).toBe(2);
    expect(second.id).toBe(2);
    expect(third.id).toBe(2);
  });
});
