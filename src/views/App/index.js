import React from 'react';
import getData from './data';
import './style.css';

class App extends React.Component {
  state = {
    questions: {}
  };

  componentWillMount() {
    getData()
      .then((data) => {
        console.warn('Got questions', data);
        this.setState({ questions: data });
      })
      .catch((err) => {
        console.error('Error while fetching questions', err);
      });
  }

  handleChangeAnswer = (event) => {
    const answer = event.target.value.substr(0, 20);
    const question = this.getSelectedQuestion();
    question.answer = answer;

    this.setState({
      ...this.state,
      questions: {
        ...this.state.questions,
        [question.id]: {
          ...question,
          answer: answer
        }
      }
    });
  };

  getSelectedQuestion = () => {
    // return the question which we need to show
    return this.state.questions['1'];
  };

  render = () => {
    let questionClass = 'question';
    const question = this.getSelectedQuestion();
    const answer = question ? question.answer : '';

    if (answer !== '') {
      questionClass += ' faded';
    }

    if (!question) {
      return <div className="question">Loading...</div>;
    }

    return (
      <div className="container">
        <div className={questionClass}>{question.body}</div>
        <div className="answer">
          <input
            id="answerId"
            className="input"
            type="text"
            value={answer}
            onChange={this.handleChangeAnswer}
          />
        </div>
      </div>
    );
  };
}
export default App;
