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
      justifyContent:"center",
      alignContent:"center",
      justifyItems:"center",
      alignItems:"center",
      flexWrap:"wrap",
      gap:"2em",
    }}>
      <img src={pictureOfMe} style={{
        boxShadow: "10px 5px 5px black",
        height:"min(400px, 57vmin)",
        width:"min(550px, 70vmin)",
        borderRadius:"20px",
      }}/>
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
        <h4>I am currently a high school student.</h4>
        <p style={{textWrap:"wrap"}}>Currently a student at both Warren Tech and Standley Lake High School. I am a hard-working learner, always open to new ways to do things more efficiently. I love working on projects and finding different ways to make my brain hurt. With an extensive knowledge of general Information Technology, from Coding to DevOps to physical Hardware.</p>
        {/* <p style={{textWrap:"wrap"}}></p> */}
      </Box>
    </Box>
  )
}

export default Home