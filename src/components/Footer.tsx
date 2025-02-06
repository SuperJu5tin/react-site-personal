import Box from '@mui/material/Box'

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
    }}>
      <Box sx={{
        justifySelf:"left",
        alignSelf:"center"
      }}>
        <h4 style={{color:"black"}}>All Rights Reserved @ 2024 justinlibhart.xyz</h4>
      </Box>
      <Box>
        <h4 style={{color:"black"}}>Contact Me</h4>
        <Box sx={{
          display:"flex", 
          gap:"10px",
          flexWrap:"wrap",
          alignItems:"baseline", 
          alignContent:"bottom", 
          justifyItems:"right",
          justifyContent:"center",
        }}>
          <Box>
            <a href="mailto:superjuslib@gmail.com" aria-label="Justin's Email Address">superjuslib@gmail.com</a>
            {/* <Button variant="contained" onClick={() => {navigator.clipboard.writeText("superjuslib@gmail.com")}}><ContentCopyIcon sx={{fontSize:"1em"}} /></Button> */}
          </Box>
          <a target='_blank' href="https://www.linkedin.com/in/justin-libhart-798498304/" aria-label="View Justin's LinkedIn Profile">LinkedIn</a>
          <a target='_blank' href='https://github.com/SuperJu5tin' aria-label="View Justin's Github Profile">Github</a>
          <a target='_blank' href='https://www.instagram.com/justinlibhart/' aria-label="View Justin's Instagram">Instagram</a>
          <a target='_blank' href='https://www.credly.com/users/justin-libhart' aria-label="View Justin's Credly Profile">Credly</a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer