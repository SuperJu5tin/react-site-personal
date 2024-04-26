import Box from "@mui/material/Box"
import pictureOfMe from "../assets/meSinging.webp"


const Home = () => {

  return (
    <Box sx={{
      minHeight:"60vh",
      paddingTop:"5em",
      paddingBottom:"5em",
      paddingLeft:"3em",
      paddingRight:"3em",
      display:"flex",
      flexWrap:"wrap",
      justifySelf:"center",
      justifyContent:"center",
      alignContent:"center",
      justifyItems:"center",
      alignItems:"center",
      gap:"2em",
    }}>
      <Box sx={{
        flex:"1"
      }}>
        <img alt="A picture of Justin" src={pictureOfMe} style={{
          boxShadow: "10px 5px 5px black",
          height:"min(400px, 67vmin)",
          width:"min(550px, 80vmin)",
          borderRadius:"20px",
        }}/>
      </Box>
      
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        flex:"1"
      }}>
        <h1 style={{fontFamily:"Satisfy", borderBottom:"solid .1em"}}>Hello, I am Justin Libhart</h1>
        <p style={{textWrap:"pretty"}}><span style={{margin:"2em"}}></span>Currently a student at both Warren Tech and Standley Lake High School. I am a hard-working learner, always open to new ways to do things more efficiently. I love working on projects and finding different ways to make my brain hurt. With an extensive knowledge of general Information Technology, from Coding to DevOps to physical Hardware.</p>
      </Box>
    </Box>
  )
}

export default Home