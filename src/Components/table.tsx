import * as React from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Box } from '@mui/material';
interface PState{
  user:{
    login:String,
    avatar_url:String,
    type:String
   }[]
}
const UserTable = (props:PState) => {
    const {user} = props;
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
          renderCell: (params) => <img style={{borderRadius:"50%", width:"60px", height:"50px"}} src={params.value} />
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
    const rows = user.map((user:any , index:number)=>{
     return  {id: index ,login:user.login,type:user.type, avatar:user.avatar_url}
    })
        
    
  return (
      
    <Box sx={{width:"50%" , height:"600px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        initialState={{
            sorting: {
              sortModel: [{ field: 'login', sort: 'desc' }],
            },
          }}
          disableColumnMenu
      />
    </Box>

  )
}

export default UserTable