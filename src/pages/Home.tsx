import Box from "@mui/material/Box"
import pictureOfMe from "../assets/meSinging.jpg"


const Home = () => {

  return (
    <Box sx={{
      minHeight:"60vh",
      // padding:"40px",
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
      // display:"grid",
      // gridTemplateColumns:"repeat(auto-fit, 500px)",
      gap:"2em",
    }}>
      <Box sx={{
        flex:"1"
      }}>
        <img src={pictureOfMe} style={{
          boxShadow: "10px 5px 5px black",
          height:"min(400px, 67vmin)",
          width:"min(550px, 80vmin)",
          borderRadius:"20px",
        }}/>
      </Box>
      
      <Box sx={{
        // marginLeft:"30px",
        // marginTop:"2em",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        flex:"1"
      }}>
        <h1 style={{fontFamily:"Satisfy", borderBottom:"solid .1em"}}>Hello, I am Justin Libhart</h1>
        {/* <h4>I am currently a high school student.</h4> */}
        <pre style={{textWrap:"pretty"}}>   Currently a student at both Warren Tech and Standley Lake High School. I am a hard-working learner, always open to new ways to do things more efficiently. I love working on projects and finding different ways to make my brain hurt. With an extensive knowledge of general Information Technology, from Coding to DevOps to physical Hardware.</pre>
        {/* <p style={{textWrap:"wrap"}}></p> */}
      </Box>
    </Box>
  )
}

export default Home