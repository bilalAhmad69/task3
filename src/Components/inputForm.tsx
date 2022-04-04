import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import { Box ,  TextField,Typography} from '@mui/material';
import React, { useState } from 'react';
 import { useNavigate} from 'react-router-dom';
export const InputForm = () => {

    const [login , setLogin]  =  useState<string>("");
    const navigate = useNavigate();
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setLogin(e.target.value);
     
        
    }
    const handleSubmit = ()=>{
       navigate(`/data/${login}`);
    
    }
  return (
      <Box>
        <Typography variant="h5" mb={5}>
  Nova Task # 3
</Typography>
           <TextField   color='primary'
            label={`Search-example = "Foo"`} value = {login} 
            inputProps={{ "data-testid": "inputTxt" }}
              onChange ={handleOnChange}/>
   <Button data-testid="btn" variant="contained" sx={{height:"55px"}} 
   onClick={handleSubmit}
    endIcon={<SendIcon />
   }>
    Submit
  </Button>
  </Box>
  )
}
export default InputForm