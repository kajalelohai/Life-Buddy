import React from 'react';
import './style.css';

class App extends React.Component {
  state = { answer: '' };

  handleChangeAnswer = (event) => {
    const answer = event.target.value.substr(0, 20);

    this.setState({ answer });
  };

  render = () => {
    let questionClass = 'question';

    if (this.state.answer !== '') {
      questionClass += ' faded';
    }

    return (
      <div className="container">
        <div className={questionClass}>How would you like to feel at the end of the day?</div>
        <div className="answer">
          <input
            id="answerId"
            className="input"
            type="text"
            value={this.state.answer}
            onChange={this.handleChangeAnswer}
          />
        </div>
      </div>
    );
  };
}

export default App;
