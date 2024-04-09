// import { Box, Divider } from "@mui/material"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

const sideLength = "max(200px, 25vmin)" 

const basicOverlappedStyle = {
  width:sideLength,
  height:sideLength,
  padding:"20px",
  backgroundColor:"rgb(77, 199, 250)",
  borderRadius:"20px",
  border:"solid",
}

const Snake = () => {

  return (
    <Box sx={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignContent:"center",
      flexWrap:"wrap",
      // gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      margin:"auto",
    }}>
      <Box sx={{
        ...basicOverlappedStyle,
        marginRight:"-2vw",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        rotate:"-10deg",
        zIndex:"2",
      }}>
        <Typography variant="h5">Github</Typography>
        <Divider flexItem ></Divider>
        <Typography variant="body1">A basic game of snake in multiple languages: Javascript, C, Python, Rust </Typography>
      </Box>
      <Box sx={{
        ...basicOverlappedStyle,
        rotate:"5deg",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        alignContent:"center",
        textAlign:"center",
        zIndex:"3",
      }}>
        <Typography variant="h3">Snake</Typography>
        <Divider flexItem ></Divider>
        <p>A basic game of snake in multiple languages: Javascript, C, Python, Rust </p>
      </Box>
      <Box sx={{
        ...basicOverlappedStyle,
        rotate:"15deg",
        marginLeft:"-2vw",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        alignContent:"center",
        textAlign:"center",
        zIndex:"1",
      }}>

      </Box>
    </Box>
    
  )
}

export default Snake