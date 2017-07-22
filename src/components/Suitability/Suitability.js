import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { browserHistory } from "react-router";

import quizQuestions from './quizQuestions';
import Quiz from './Quiz';
import Result from './Result';

class Suitability extends Component {

	constructor(props) {
		super(props);
		this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: 0,
      answerWeight: 0,
      result: ''
		};
    this.handleAnswerSelected=this.handleAnswerSelected.bind(this);
	}

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  setUserAnswer(answer) {
    this.setState({
      answersCount: this.state.answersCount + parseInt(answer, 10),
      answer: answer 
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    };
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    // when survey ends...
      // browserHistory.push("/");
      this.props.history.push('/Recommendation/Recommendation');
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />  
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

	render() {
		return(
			<div>
			    <Link to="/MyPortfolio" className="btn btn-primary">Go back</Link>
    			<hr />
       			{this.state.result ? this.renderResult() : this.renderQuiz()}
     		</div>  
		)
	}
}

// Export the component back for use in other files
export default Suitability;