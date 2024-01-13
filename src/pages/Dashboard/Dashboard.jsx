import * as React from 'react';
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useHttp } from '../../hooks/useHttp';

// actions
import * as settingActions from '../../states/setting.slice'

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataSource } = useHttp({
    url: 'https://opentdb.com/api_category.php',
    method: 'GET',
  })
  const state = useSelector(state => state)
  const category = dataSource?.trivia_categories || [];


  console.log('re-render: ', state)
  const { handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      category: '',
      difficulty: '',
      type: '',
      amount: ''
    },
  })

  function handleChangeCategory(e) {
    dispatch(settingActions.setCategory(e.target.value))
    setValue('category', e.target.value)
  }

  function handleChangeDifficulty(e) {
    dispatch(settingActions.setDifficulty(e.target.value))
    setValue('difficulty', e.target.value)
  }

  function handleChangeType(e) {
    dispatch(settingActions.setType(e.target.value))
    setValue('type', e.target.value)
  }

  function handleChangeAmount(e) {
    dispatch(settingActions.setAmount(e.target.value))
    setValue('amount', e.target.value)
  }

  const onSubmit = (data) => {
    navigate('/question')
    // dispatch(settingActions.setSettings({
    //   category: data.category,
    //   difficulty: data.difficulty,
    //   type: data.type,
    //   amount: data.amount
    // }))
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h2" component="h2" textAlign="center" marginBottom={4} >
          Quiz App
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => {
              return (
                <FormControl size='small'fullWidth error={Boolean(fieldState.error)}>
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    {...field}
                    labelId="category"
                    id="category"
                    label="Category"
                    onChange={handleChangeCategory}
                  >
                    {category.map(category => (
                      <MenuItem value={category.id}>{category.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )
            }}
          />
          <Controller
            name="difficulty"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => {
              return (
                <FormControl size='small' fullWidth error={Boolean(fieldState.error)} style={{ marginTop: 10 }}>
                  <InputLabel id="difficulty">Difficulty</InputLabel>
                  <Select
                    {...field}
                    labelId="difficulty"
                    id="difficulty"
                    label="Difficulty"
                    onChange={handleChangeDifficulty}
                  >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                  </Select>
                </FormControl>
              )
            }}
          />
          <Controller
            name="type"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => {
              return (
                <FormControl size='small'fullWidth error={Boolean(fieldState.error)} style={{ marginTop: 10 }}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select
                    {...field}
                    labelId="type"
                    id="type"
                    label="type"
                    onChange={handleChangeType}
                  >
                    <MenuItem value="multiple">Multiple Choice</MenuItem>
                    <MenuItem value="boolean">True/False</MenuItem>
                  </Select>
                </FormControl>
              )
            }}
          />

          <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => {
              return (
                <FormControl size='small' fullWidth  style={{ marginTop: 10 }}>
                  <TextField 
                    {...field} 
                    size='small' 
                    id="amount" 
                    label="Amount of Question" 
                    variant="outlined" 
                    error={Boolean(fieldState.error)} 
                    onChange={handleChangeAmount}
                  />
                </FormControl>
              )
            }}
          />

          <Box mt={3} textAlign="center">
            <Button variant="contained" type="submit">Get Started</Button>
          </Box>  
        </form>

        

       
     

        

        

      </Container>
      
    </div>
  )
}

export default Dashboard