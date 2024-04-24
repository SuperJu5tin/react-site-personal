import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Footer = () => {
  return (
    <Box sx={{
      marginTop:"100px",
      padding:"1vmax",
      height:"fit-content",
      background:"#777",
      border:"solid 5px",
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"1em",
      // justifyItems:"center",
      // alignItems:"center",
      // textAlign:"center",
    }}>
      <Box sx={{
        justifySelf:"left",
        alignSelf:"center"
      }}>
        <h4 style={{color:"black"}}>All Rights Reserved @ 2024 justinlibhart.xyz</h4>
      </Box>
      
      {/* <Box></Box> */}
      <Box>
        <h4 style={{color:"black"}}>Contact Me</h4>
        <Box sx={{
          display:"flex", 
          gap:"10px",
          flexWrap:"wrap",
          // flexDirection:"column",
          alignItems:"baseline", 
          alignContent:"bottom", 
          justifyItems:"right",
          justifyContent:"center",
        }}>
          <Box sx={{
            // display:"flex", 
            // gap:"10px", 
            // flexWrap:"wrap",
            // flexDirection:"row",
            // alignItems:"baseline", 
            // justifyItems:"right",
            // justifyContent:"right",
            // display:"grid",
            // gridAutoFlow:"column",
            // gap:"10px"
          }}>
            <a href="mailto:superjuslib@gmail.com" >superjuslib@gmail.com</a>
            {/* <Button variant="contained" onClick={() => {navigator.clipboard.writeText("superjuslib@gmail.com")}}><ContentCopyIcon sx={{fontSize:"1em"}} /></Button> */}
          </Box>
          <a target='_blank' href="https://www.linkedin.com/in/justin-libhart-798498304/" >LinkedIn</a>
          <a target='_blank' href='https://github.com/SuperJu5tin'>Github</a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer