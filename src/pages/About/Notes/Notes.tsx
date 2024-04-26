import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import CC from '../../../assets/cc.svg';


const categoryStyles = {
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"column",
  flex:"10em",
  borderLeft:"dashed 1px",
  // borderTop:"solid .25em",
  paddingLeft:".5rem", 
  paddingRight:".5rem",
  paddingBottom:"1rem",
  textWrap:"wrap",
  textAlign:"center", 
  alignContent:"center",
  alignItems:"center",
  justifyContent:"space-between",
  justifyItems:"center",
}

const categoryHeaderStyles = {

  // justifySelf:"initial",
  marginBottom:"1rem",
  borderBottom:"solid 4px",
}

const experienceStyles = {
  margin:"auto",
}

const NotableAccomplishments = () => {
  
  
  return (
    <Box sx={{
      rotate:"2deg",
      height:"fit-content",
      padding:"20px",
      display:"flex",
      flexWrap:"wrap",
      flexDirection:"column",
      // display:"grid",
      // gridTemplateColumns:"repeat(auto-fit, max(200px, 1fr))",
      backgroundColor:"#78c3a7",
      borderRadius:"30px",
      border:"solid",
      boxShadow:"3px 3px 3px 3px #555"
    }}>
      
      <Divider><h1 >Notes</h1></Divider>
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        // display:"grid",
        // gridTemplateColumns:"repeat(auto-fit, max(200px, 1fr))",
        justifyContent:"center",
        height:"fit-content",
        width:"fit-content",
      }}>
          <Box sx={{
            ...categoryStyles
          }}>
              <h2 style={categoryHeaderStyles}>Musical</h2>
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
            ...categoryStyles,
          }}>
            <h2 style={categoryHeaderStyles}>Sports</h2>
            <p>2 Years of Track and Field</p>
            <p>2 Years of Cross Country</p>
            <h3>Lettering</h3>
            <p>2 years In Cross Country</p>
            <img alt="The Cross Country Letter Icon" src={CC} style={{
              width:"60%"
            }} />
          </Box>
          <Box sx={{
            ...categoryStyles
          }}>
            <h2 style={categoryHeaderStyles}>Experience</h2>
            <Box sx={experienceStyles}>
              <h3>Irrigation Specialist</h3>
              <p style={{fontSize:".75em"}}>May 2020 - August 2023</p>
              <h5>Reliable Helpers</h5>
              <p style={{textAlign:"center"}}>Led irrigation based projects</p>
            </Box>
            
          </Box>
      </Box>
    </Box>
  )
}

export default NotableAccomplishments