// import { Box, Divider } from "@mui/material"
import { Button, Typography } from "@mui/material"
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import snakePic from "../../../assets/snake.png"
import { useState } from "react"

const sideLength = "max(190px, 25vmin)" 
const sideLength2 = "max(550px, 70vmin)" 
const sideLength3 = "max(500px, 60vmin)" 

const basicOverlappedStyle = {
  width:sideLength,
  height:sideLength,
  padding:"20px",
  backgroundColor:"#98CBC7",
  borderRadius:"20px",
  border:"solid",
}

const modalStyle = {
  display:"flex",
  width:sideLength2,
  height:sideLength2,
  justifySelf:"center",
  alignSelf:"center",
  justifyContent:"center",
  alignContent:"center",
  background: 'rgb(40, 189, 139)',
  color:"white",
  border: 'solid #555',
  borderRadius: '20px',
};

const Snake = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignContent:"center",
      flexWrap:"wrap",
      margin:"auto",
    }}>
      <Box sx={{
        ...basicOverlappedStyle,
        marginRight:"-2vw",
        display:"flex",
        flexDirection:"column",
        // flexWrap:"wrap",
        // justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        rotate:"-10deg",
        zIndex:"2",
      }}>
        <Typography variant="h5" sx={{marginTop:"max(10px, 2vmin)",}}>Github</Typography>
        <Divider flexItem ></Divider>
        <Typography variant="body1">Used two github repositories based on the language being compiled or interpreted. </Typography>
        <Button target='_blank' href="https://github.com/SuperJu5tin/Snake_Compiled.git">Compiled</Button>
        <Button target='_blank' href="https://github.com/SuperJu5tin/Snake_Interpreted.git">Interpreted</Button>
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
        <Typography variant="body1">A basic game of snake in multiple languages: Javascript, C, Python, and Rust. </Typography>
      </Box>
      <Box sx={{
        ...basicOverlappedStyle,
        rotate:"15deg",
        marginLeft:"-2vw",
        display:"flex",
        flexDirection:"column",
        // flexWrap:"wrap",
        alignContent:"center",
        textAlign:"center",
        zIndex:"1",
      }}>
        <Button onClick={handleOpen}>Open Example</Button>
        <Modal sx={modalStyle} open={open} onClose={handleClose}>
          <Box sx={{margin:"auto"}}>
          <Typography variant="h5"><a target='_blank' href="/snake/index.html">Click To Open In New Tab</a></Typography>
            <Box sx={{margin:"auto"}}>
              <iframe style={{width:sideLength3, height:sideLength3}} src="/snake/index.html" ></iframe>
            </Box>
          </Box>
        </Modal>
        {/* <Typography variant="h5"><a target='_blank' href="/snake/index.html">Click for Example</a></Typography> */}
        <a target='_blank' style={{width:"100%", height:"90%"}} href="/snake/index.html">
          <img src={snakePic} style={{width:"100%", height:"100%"}} />
        </a>
      </Box>
    </Box>
    
  )
}

export default Snake