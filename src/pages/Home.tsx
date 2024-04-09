import Box from "@mui/material/Box"
import pictureOfMe from "../assets/meSinging.jpg"


const Home = () => {

  return (
    <Box id="home" sx={{
      height:"60vh",
      padding:"40px",
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      
    }}>
      <img src={pictureOfMe} style={{
        boxShadow: "10px 5px 5px black",
        height:"40vh",
        maxWidth:"50vh",
        borderRadius:"20px"
      }}/>
      {/* <Box sx={{
        marginLeft:"30px",
        minWidth:"30vw",
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center"
      }}>
        <h2>Hello, I am Justin</h2>
        <h4>I am currently a highschool student. </h4>
        Add some SVG Shapes
      </Box> */}
    </Box>
  )
}

export default Home