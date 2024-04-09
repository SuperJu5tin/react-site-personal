import { Box, Divider } from "@mui/material"

const Snake = () => {


  return (
    <Box sx={{
      display:"flex",
      margin:"auto",
    }}>
      <Box sx={{
        marginRight:"-50px",
        rotate:"-10deg",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        width:"20vmin",
        height:"20vmin",
        padding:"20px",
        backgroundColor:"rgb(77, 199, 250)",
        border:"solid",
        borderRadius:"20px",
        alignContent:"center",
        zIndex:"2",
      }}>

      </Box>
      <Box sx={{
        rotate:"5deg",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        width:"20vmin",
        height:"20vmin",
        padding:"20px",
        backgroundColor:"rgb(77, 199, 250)",
        border:"solid",
        borderRadius:"20px",
        alignContent:"center",
        zIndex:"3",
      }}>
        <h3>Snake</h3>
        <Divider flexItem ></Divider>
        <p>A basic game of snake in multiple languages: Javascript, C, Python, Rust </p>
      </Box>
      <Box sx={{
        rotate:"15deg",
        marginLeft:"-50px",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        width:"20vmin",
        height:"20vmin",
        padding:"20px",
        backgroundColor:"rgb(77, 199, 250)",
        border:"solid",
        borderRadius:"20px",
        alignContent:"center",
        zIndex:"1",
      }}>

      </Box>
    </Box>
    
  )
}

export default Snake