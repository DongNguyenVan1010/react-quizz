import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

function Score() {
  const navigate = useNavigate();
  const score = useSelector(state => state.setting.score);

  return (
    <Box mt={5}>
      <Typography variant="h3" textAlign="center" mb={5}>Your score is {score}</Typography>
      <Button variant="contained" color="primary" fullWidth onClick={() => navigate('/')}>Play again</Button>
    </Box>
  )
}

export default Score