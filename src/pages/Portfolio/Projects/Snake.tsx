// import { Box, Divider } from "@mui/material"
// import { Button, Typography } from "@mui/material"
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import snakePic from "../../../assets/snake.png"
import { useState } from "react"
import Button from '@mui/material/Button';

const sideLength = "max(210px, 25vmin)" 
const sideLength2 = "max(550px, 70vmin)" 
const sideLength3 = "max(500px, 60vmin)" 

const basicOverlappedStyle = {
  height:sideLength,
  padding:"10px",
  alignContent:"center",
  justifyContent:"center",
  backgroundColor:"#98CBC7",
  borderRadius:"20px",
  border:"solid",
  boxShadow:"3px 3px 3px 3px #555",
}

const modalStyle = {
  display:"flex",
  margin:"auto",
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
      justifyContent:"space-around",
      alignContent:"center",
      justifyItems:"center",
      alignItems:"center",
      flexWrap:"wrap",
      margin:"auto",
    }}>
      <Box sx={{
        ...basicOverlappedStyle,
        width:"calc(max(210px, 25vmin) - 2vw)",
        paddingRight:"2vw",
        marginRight:"-2vw",
        display:"flex",
        flexDirection:"column",
        // flexWrap:"wrap",
        // justifyContent:"center",
        textAlign:"center",
        rotate:"-10deg",
        zIndex:"2",
      }}>
        <h1 style={{marginTop:"max(10px, 2vmin)", marginBottom:"0px"}}>Github</h1>
        <Divider flexItem ></Divider>
        <p style={{fontFamily:"Indie Flower"}}>Two github repositories</p>
        <a target='_blank' href="https://github.com/SuperJu5tin/Snake_Compiled.git">Compiled Languages</a>
        <a target='_blank' href="https://github.com/SuperJu5tin/Snake_Interpreted.git">Interpreted Languages</a>
      </Box>
      <Box sx={{
        ...basicOverlappedStyle,
        width:sideLength,
        rotate:"5deg",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        textAlign:"center",
        zIndex:"3",
      }}>
        <h1 style={{margin:"0", fontFamily: '"Gloria Hallelujah", cursive'}}>Snake</h1>
        <Divider flexItem ></Divider>
        <p style={{fontFamily:'"Indie Flower", cursive'}}>A basic game of snake in multiple languages: Javascript, C, Python, and Rust. </p>
      </Box>
      <Box sx={{
        ...basicOverlappedStyle,
        width:sideLength,
        rotate:"15deg",
        marginLeft:"-2vw",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        textAlign:"center",
        zIndex:"1",
      }}>
        <Box sx={{display:"flex", flexWrap:"wrap", alignItems:"baseline", justifyContent:"center",}}>
          <Button sx={{margin:"auto"}} onClick={handleOpen}>Open Example</Button>
          <h3>Keyboard Required</h3>
        </Box>
        <Modal sx={modalStyle} open={open} onClose={handleClose}>
          <Box sx={{display:"flex", flexDirection:"column", justifyItems:"center", alignItems:"center", justifyContent:"center"}}>
            <Box sx={{display:"inline-flex"}}>
              <h2 style={{fontFamily: '"Gloria Hallelujah", cursive'}}><a style={{textDecoration:"none", }} target='_blank' href="/snake/index.html">Open In New Tab</a></h2>
              <Button sx={{ marginLeft:"10px", fontSize:"20px", fontFamily: '"Gloria Hallelujah", cursive'}} onClick={handleClose}>Close</Button>
            </Box>
            <Box>
              <iframe style={{width:sideLength3, height:sideLength3}} src="/snake/index.html" ></iframe>
            </Box>
          </Box>
        </Modal>
        <a target='_blank' style={{width:"70%", height:"70%"}} href="/snake/index.html">
          <img src={snakePic} style={{width:"100%", height:"100%"}} />
        </a>
      </Box>
    </Box>
    
  )
}

export default Snake