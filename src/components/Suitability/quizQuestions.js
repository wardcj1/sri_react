const quizQuestions = [
  {
    question: 'Which best describes your investment objective?',
    answers: [
      {
        weight: 6,
        content: 'Income is my primary objective with capital appreciation being secondary.'
      }, {
        weight: 8,
        content: 'Capital appreciation is my primary objective with income being secondary.'
      }, {
        weight: 10,
        content: 'Capital appreciation is my only objective.'
      }  
    ],
  }, {
    question: 'How important is it for your portfolio to generate current income?',
    answers: [
      {
        weight: 3,
        content: 'Very important - I will use current income from the portfolio to meet current expenses.'
      }, {
        weight: 5,
        content: 'Somewhat important - Distributions from this portfolio will help in meeting current expenses.'
      }, { 
        weight: 7,
        content: 'Not important.  Current income is not a consideration.'
      }
    ],
  }, {
    question: 'When is the earliest that you anticipate needing all or a substantial portion of your investable assets?',
    answers: [
      {
        weight: 0,
        content: '0-5 years'
      }, {
        weight: 6,
        content: '6-10 years'
      }, {
        weight: 9,
        content: '11-15 years'
      }, {
        weight: 12,
        content: 'Over 15 years'
      }
    ],
  }, {
    question: 'What is your age range?',
    answers: [
      {
        weight: -5,
        content: 'Over 75'
      }, {
        weight: -2,
        content: '65-74'
      }, {
        weight: 2,
        content: '55-64'
      }, {
        weight: 6,
        content: '40-54'
      }, {
        weight: 9,
        content: 'Under 40'
      }
    ],
  }, {
    question: 'How willing are you to accept fluctuations in the value of your portfolio?',
    answers: [
      {
        weight: -2,
        content: 'Fluctuation in principal is a key concern.'
      }, {
        weight: 0,
        content: 'Fluctuation in principal is a moderate concern.'
      }, {
        weight: 1,
        content: 'Fluctuation in principal is a minor concern.'
      }, {
        weight: 2,
        content: 'Fluctuation in principal is of no concern.'
      }
    ],
  }, {
    question: 'How important is it to you to be able to liquidate part or all of your portfolio with little loss of your investments?',
    answers: [
      {
        weight: -2,
        content: 'Very important.'
      }, {
        weight: 1,
        content: 'Moderately important.'
      }, {
        weight: 2,
        content: 'Not important.'
      }
    ],
  }, {
    question: 'Short-term volatility in financial markets may cause portfolios to decline in value.  How willing are you to accept short-term losses?',
    answers: [
      {
        weight: -3,
        content: 'I am unwilling to accept more than a small, temporary loss in portfolio value.'
      }, {
        weight: 0,
        content: 'I am willing to accept short-term losses, but not as much as the loss in the broad equity market.'
      }, {
        weight: 4,
        content: 'I am willing to accept short-term losses in line with the broad equity market.'
      }, {
        weight: 7,
        content: 'I am willing to accept higher than market short-term losses as part of a strategy to achieve higher than long-term market returns.'
      }
    ]
  }
];

export default quizQuestions;