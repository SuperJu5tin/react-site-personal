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
          display:"grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        }}>
          <Skills />
          <Interests />      
          <Notes />
        </Box>
      </>
    )
  }
  
  export default About