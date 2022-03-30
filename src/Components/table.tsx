import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Box , Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams , Link  , useLocation} from 'react-router-dom';
import {  useEffect, useState } from 'react';
import NotFoundError from './notFoundError';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
interface IState{
  user:{
    login:String,
    avatar_url:String,
    type:String
   }[]
}
const UserTable = () => {
 
  
  const url = "https://api.github.com/search/users?q="
  const [users, setUsers] =  useState<IState["user"]>([])
  const [notFoundError , setNotFoundError] = useState<any>();
  const [isLoading , setIsLoading] = useState<boolean>(true);
   const {id} = useParams();
   const {state} = useLocation();
  
const getUserData= async () =>{
 try{
      setUsers([]);
 const result = await axios.get((url+id))
 const items = result.data.items;
 if(items.length > 0)
 {
   // for items sorting
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
 setIsLoading(false);
}
else{
  setNotFoundError("User Not Found")
  setIsLoading(false);
}
}
 catch (error:any)
 {
    setNotFoundError(error.message)
    setIsLoading(false);
 }  
 }
  useEffect(()=>{
    getUserData();

  },[])
    const columns: GridColDef[] = [
        { field: 'avatar', headerName: 'Avatar', width: 300 },
        { field: 'login', headerName: 'login', width: 300 },
        { field: 'type', headerName: 'type', width: 20 },
        {
          field: 'avatar',
          headerName: 'Avatar',
          type: 'string',
          width: 200,
          sortable: false,
          renderCell: (params) => <img style={{borderRadius:"50%", width:"40px", height:"40px"}} src={params.value} alt = "not Available"/>
        },
        {
          field: 'login',
          headerName: 'Login',
          sortable: true,
          width: 300,
        },
        {
            field: 'type',
            headerName: 'Type',
            sortable: false,
            width: 60,
            headerClassName: 'lastcolumnSeparator'
          },

      ];
    const rows = users.map((user:any , index:number)=>{
     return  {id: index ,login:user.login,type:user.type, avatar:user.avatar_url}
    })
    // if user not come from Home
    if (state !== "/") return (
      <Box sx={{width:"50%" , height:"600px"}}>
      <Link to = "/">   <Button variant="contained" sx={{height:"40px" , display:"flex"}} startIcon={<ArrowBackIosIcon />}>
    Back To Home
  </Button>
  <NotFoundError error = {"Kindly Come From Home Page"}/>
  </Link> 
  </Box>
    )
    // loading is true during data fetching
 {if (isLoading) return <CircularProgress />}
   return (
    <Box sx={{width:"50%" , height:"600px"}}>
   <Link to = "/">   <Button variant="contained" sx={{height:"40px" , display:"flex"}} startIcon={<ArrowBackIosIcon />}>
    Back To Home
  </Button></Link> 
  {/* if something went worng or no result found */}
     {notFoundError?<NotFoundError error = {notFoundError}/>:
    // if data found then sucessfully loaded
      <DataGrid
      sx={{
  
          backgroundColor: 'white',
      }}
        rows={rows}
        columns={columns }
        pageSize={9}
        rowsPerPageOptions={[9]}
          disableColumnMenu
      />
    }
    </Box>
  
  )
 
}

export default UserTable