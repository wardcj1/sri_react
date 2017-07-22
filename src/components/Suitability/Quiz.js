import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
	 return (
	    <AnswerOption
		    key={key.content}
		    answerContent={key.content}
		    answerWeight={key.weight}
		    answer={props.answer}
		    questionId={props.questionId}
		    onAnswerSelected={props.onAnswerSelected}
	    />
	  );			
  }	
  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      
  	  <div key={props.questionId}>
  	  <QuestionCount 
  	  	counter={props.questionId}
  	  	total={props.questionTotal}
  	  />
  	  <Question content={props.question} />
  	  	<ul className="answerOptions">
  	  	  {props.answerOptions.map(renderAnswerOptions)}
  	  	</ul>
  	  </div>
    </ReactCSSTransitionGroup>  
  ); 	
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;