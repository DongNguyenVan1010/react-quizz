import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

import { useHttp } from '../../hooks/useHttp';

// actions
import * as settingActions from '../../states/setting.slice';

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Question() {
  const navigate = useNavigate();
  const setting = useSelector(state => state.setting);
  const score = useSelector(state => state.setting.score);
  const dispatch = useDispatch();
  const [answers, setAnswers] = React.useState([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const url = (!setting.amount || !setting.category || !setting.difficulty || !setting.type) ? '' : `https://opentdb.com/api.php?amount=${setting.amount}&category=${setting.category}&difficulty=${setting.difficulty}&type=${setting.type}`
  const { dataSource } = useHttp({
    url
  })
  const results = dataSource?.results || [];

  React.useEffect(() => {
    if(results.length > 0) {
      const questions = [...results[questionIndex]?.incorrect_answers || []];
      questions.splice(getRandom(questions.length), 0, results[questionIndex]?.correct_answer);
      setAnswers(questions)
    }
  }, [results, questionIndex]);


  function handleAnswer(answer) {
    const correctAnswer = results[questionIndex]?.correct_answer;

    // check answer
    if(answer === correctAnswer) {
      dispatch(settingActions.setScore(score + 1));
    }
    
    // next question
    if(questionIndex + 1 < results.length) {
      setQuestionIndex(prevState => prevState + 1)
    } else {
      navigate('/score')
    }
  }

  return (
    <>
      <Box>
        <Typography variant="h4" textAlign="center">Question {questionIndex + 1}</Typography>
        <Typography mt={5}>
          {decode(results[questionIndex]?.question || '')}
        </Typography>

       
          {answers.map(answer => (
            <Box key={answer} mt={2}>
              <Button 
                fullWidth 
                variant="contained" 
                color="primary"
                onClick={() => handleAnswer(answer)}
              >
                {decode(answer)}
              </Button>
            </Box>
          ))}

        <Box mt={5}>
          Score: {score} / {results.length}
        </Box>
      </Box>
    </>
  )
}

export default Question