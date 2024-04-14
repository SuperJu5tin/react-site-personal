import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Footer = () => {
  return (
    <Box sx={{
      marginTop:"100px",
      padding:"1vmax",
      // height:"200px",
      background:"#777",
      border:"solid 5px",
      display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr",
      justifyItems:"center",
      alignItems:"center",
      textAlign:"center",
    }}>
      <h4 style={{color:"black"}}>All Rights Reserved @ 2024 justinlibhart.xyz</h4>
      <Box></Box>
      <Box>
        <h4 style={{color:"black"}}>Contact Me</h4>
        <Box sx={{display:"flex", gap:"10px", flexDirection:"column"}}>
          <Box sx={{display:"flex", alignItems:"baseline", gap:"10px", flexDirection:"row"}}>
            <a href="mailto:superjuslib@gmail.com" >superjuslib@gmail.com</a>
            <Button size="small" variant="contained" onClick={() => {navigator.clipboard.writeText("superjuslib@gmail.com")}} startIcon={<ContentCopyIcon />}>Copy</Button>
          </Box>
          <a target='_blank' href="http://testout.com" >LinkedIn</a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer