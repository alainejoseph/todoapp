import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddTodo = () => {
  return (
    <div>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      style={{textAlign:'center'}}
    >
      <TextField id="outlined-basic" label="Todo Item Description" variant="outlined" />
      <br />
      <TextField id="filled-basic" label="Completed" variant="outlined" />
      <br />
      <TextField id="standard-basic" label="user Id" variant="outlined" />
      <br />
      <Button variant="contained">Add Todo</Button>
    </Box>
    </div>
  )
}

export default AddTodo
