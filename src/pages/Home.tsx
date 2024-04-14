import Box from "@mui/material/Box"
import pictureOfMe from "../assets/meSinging.jpg"


const Home = () => {

  return (
    <Box sx={{
      height:"60vh",
      padding:"40px",
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      flexWrap:"wrap",
    }}>
      <img src={pictureOfMe} style={{
        boxShadow: "10px 5px 5px black",
        height:"min(400px, 57vmin)",
        width:"min(550px, 70vmin)",
        borderRadius:"20px"
      }}/>
      <Box sx={{
        marginLeft:"30px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}>
        <h1 style={{fontFamily:"Satisfy"}}>Hello, I am Justin Libhart</h1>
        <h4>I am currently a highschool student.</h4>
        <p style={{textWrap:"pretty"}}>I am a student at both Warren Tech and Standley Lake Highschool</p>
      </Box>
    </Box>
  )
}

export default Home