import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import { Box ,  TextField,Typography} from '@mui/material';
import React, { useState } from 'react';
import UserTable from './table';
import NotFoundError from './notFoundError';
import axios from 'axios';
import { setFlagsFromString } from 'v8';
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
     const items = result.data.items;
     if(items.length > 0)
     {
       // items sorted by login
      items.sort(function(itemA:any, itemB:any) {
        const loginA = itemA.login.toUpperCase(); 
        const loginB = itemB.login.toUpperCase(); 
        if (loginA < loginB) {
          return -1;
        }
        if (loginA > loginB) {
          return 1;
        }
        return 0;
      });
     setUsers(items.map((item:any)=>{
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