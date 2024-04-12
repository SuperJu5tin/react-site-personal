// import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"

const categoryStyles = {
  borderLeft:"dashed 1px", 
  paddingLeft:".5rem", 
  paddingRight:".5rem"
}

const NotableAccomplishments = () => {
  
  
  return (
    <Box sx={{
      rotate:"4deg",
      height:"fit-content",
      padding:"20px",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
    }}>
      
      <Divider><h1>Notes</h1></Divider>
      <Box sx={{
          display:"flex",
          flexWrap:"wrap",
      }}>
          <Box sx={{
            ...categoryStyles
          }}>
              <Typography variant="h5">Musical</Typography>
              <Divider />
              <h5>Plays:</h5>
                <ul>
                  <li>Tuba</li>
                  <li>Trombone</li>
                  <li>Euphonium</li>
                </ul>
              <h5 >Bands played at Standley Lake:</h5>
              <p>
                <ul>
                  <li>Wind Ensemble</li>
                  <li>Concert Band</li>
                  <li>Musical Pit</li>
                  <li>Jazz</li>
                </ul>
              </p>
                  
          </Box>
          <Box sx={{
            textAlign:"center", 
            ...categoryStyles,
          }}>
            <Typography variant="h5">Sports</Typography>
            <Divider />
            <ul>
              <li>2 Years of Track and Field</li>
              <li>2 Years of Cross Country</li>
            </ul>
            <h3>Lettering</h3>
            <p>2 years In Cross Country</p>
          </Box>
          <Box sx={{
            textAlign:"right", 
            ...categoryStyles
          }}>
            <Typography variant="h5">Experience</Typography>
            <Divider />
            <Typography variant="h6">Irrigation Specialist</Typography>
            <p style={{fontSize:".75em"}}>May 2020 - August 2023</p>
            <h4>Reliable Helpers</h4>
            <p style={{textAlign:"center"}}>test</p>
          </Box>
      </Box>
    </Box>
  )
}

export default NotableAccomplishments