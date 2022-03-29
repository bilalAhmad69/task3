import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import { Box ,  TextField,Typography} from '@mui/material';
import React, { useState } from 'react';
import UserTable from './table';
import NotFoundError from './notFoundError';
import axios from 'axios';
interface IState{
  user:{
    login:String,
    avatar_url:String,
    type:String
   }[]
}
export const InputForm = () => {
    const url = "https://api.github.com/search/users?q="
    const [login , setLogin]  =  useState<String>();
    const [users, setUsers] =  useState<IState["user"]>([])
    const [notFoundError , setNotFoundError] = useState<any>();
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setLogin(e.target.value);
    }
    const handleSubmit = async()=>{
        try{
     const result = await axios.get((url+login))
     if(result.data.items.length > 0){
     setUsers(result.data.items.map((item:any)=>{
      return {
       login: item.login,
       avatar_url : item.avatar_url,
       type: item.type
      }
     }))
     setNotFoundError(undefined);
    }
    else{
      setNotFoundError("User Not Found")
    }
    }
     catch (error:any)
     {
        setNotFoundError(error.message)
     }
    }
  return (
      <Box mt={5}>
        <Typography variant="h5" mb={5}>
  Nova Task # 3
</Typography>
           <TextField  label={`Search example = "Foo"`} id="margin-none"  onChange ={handleOnChange}/>
    <Button variant="contained" sx={{height:"55px"}} onClick={handleSubmit} endIcon={<SendIcon />}>
    Submit
  </Button>
  <Box sx={{display:"flex" , justifyContent:"center" , marginTop:"5px" , marginBottom:"5px" }}>
    {notFoundError ? 
    <NotFoundError error = {notFoundError}/>: 
                  users.length>0 && <UserTable user = {users}/> 
                }
    </Box>
  </Box>
  )
}
export default InputForm