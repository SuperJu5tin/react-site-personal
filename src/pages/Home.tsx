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
        height:"40vh",
        maxWidth:"50vh",
        borderRadius:"20px"
      }}/>
      <Box sx={{
        marginLeft:"30px",        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center"
      }}>
        <h2>Hello, I am Justin</h2>
        <h4>I am currently a highschool student. </h4>
        <p></p>
      </Box>
    </Box>
  )
}

export default Home