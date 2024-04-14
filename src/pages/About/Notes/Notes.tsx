import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

const categoryStyles = {
  borderLeft:"dashed 1px", 
  paddingLeft:".5rem", 
  paddingRight:".5rem"
}

const NotableAccomplishments = () => {
  
  
  return (
    <Box sx={{
      rotate:"2deg",
      height:"fit-content",
      padding:"20px",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      borderRadius:"30px",
      border:"solid",
    }}>
      
      <Divider><h1 style={{margin:"0"}}>Notes</h1></Divider>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        height:"fit-content",
        width:"fit-content",
      }}>
          <Box sx={{
            ...categoryStyles
          }}>
              <h2>Musical</h2>
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
            <h2>Sports</h2>
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
            <h2>Experience</h2>
            <Divider />
            <h3>Irrigation Specialist</h3>
            <p style={{fontSize:".75em"}}>May 2020 - August 2023</p>
            <h4>Reliable Helpers</h4>
            <p style={{textAlign:"center"}}>test</p>
          </Box>
      </Box>
    </Box>
  )
}

export default NotableAccomplishments