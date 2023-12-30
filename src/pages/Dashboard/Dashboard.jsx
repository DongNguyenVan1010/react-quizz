import * as React from 'react';
import { useForm, Controller } from "react-hook-form"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Dashboard() {
  const [age, setAge] = React.useState('');

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      category: '',
      difficulty: '',
      type: '',
      amount: ''
    },
  })
  const onSubmit = (data) => {
    console.log(data);

    // navigate to question page
    // dispatch setting  to redux store
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
                    labelId="category"
                    id="category"
                    label="Category"
                    {...field}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    labelId="difficulty"
                    id="difficulty"
                    label="Difficulty"
                    {...field}
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
                    labelId="type"
                    id="type"
                    label="type"
                    {...field}
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
                  <TextField size='small' id="amount" label="Amount of Question" variant="outlined"  error={Boolean(fieldState.error)} {...field} />
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