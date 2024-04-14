import Box from "@mui/material/Box"
import Notes from "./Notes/Notes"
import Skills from "./Skills/Skills"
import Interests from "./Interests/Interests"

const About = () => {
    return (
      <>
        <Box sx={{
          paddingLeft:"5vw",
          paddingRight:"5vw",
          paddingTop:"50px",
          paddingBottom:"50px",
          gap: "5rem",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          justifyItems:"center",
        }}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            flexWrap:"wrap",
            gap: "5rem",
            justifyContent:"center",
            alignItems:"center",
          }}>
            <Skills />
            <Notes />
          </Box>
          
          <Interests />      
          
        </Box>
      </>
    )
  }
  
  export default About