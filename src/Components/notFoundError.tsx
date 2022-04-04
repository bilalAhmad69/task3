import { Card } from "@mui/material"
const NotFoundError = (props:any) => {
  const {error} = props;
  return (
    <Card data-testid= "card" sx={{padding:"20px"}}>
        <h1>{error}</h1>
    </Card>
  )
}

export default NotFoundError