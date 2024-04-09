// import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"

const NotableAccomplishments = () => {
  
  
  return (
    <Box sx={{
      gridColumn:"1",
      rotate:"4deg",
      height:"fit-content",
      padding:"20px",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      minWidth:"250px",
      maxWidth:"30vw",
    }}>
      
      <Divider><Typography variant="h3">Notes</Typography></Divider>
      <Box sx={{
          display:"grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"
      }}>
          <Box>
              <Typography variant="h5">Musical</Typography>
              <Divider />
              <h5>Plays:</h5>
                <Typography variant="body2">
                  Tuba Trombone Euphonium
                </Typography>
              <h5 >Bands played at Standley Lake:</h5>
              <Typography variant="body2" >
                Wind Ensemble
                <br /> Concert Band
                <br /> Musical Pit
                <br /> Jazz
              </Typography>
                  
          </Box>
          <Box>
            <Typography variant="h5">Sports</Typography>
              <Divider />
              <List>
                  <ListItem>
                      <ListItemText primary="Letter In Cross Country" secondary="2 years of lettering"  />
                  </ListItem>
              </List>
          </Box>
          <Box>
            <Typography variant="h5">Experience</Typography>
              <Divider />
              <Typography variant="h6">Irrigation Specialist</Typography>
              <p>Reliable Helpers</p>
              <p>May 2020 - August 2023</p>
          </Box>
      </Box>
    </Box>
  )
}

export default NotableAccomplishments