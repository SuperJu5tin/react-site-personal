import Box from '@mui/material/Box'
import Snake from './Projects/Snake'

function Portfolio() {
  return (
    <Box sx={{
        display:"flex",
        // flexDirection:"column",
        // alignContent:"center",
        // flexWrap:"wrap",
        padding:"100px"
      }}>
      <Snake />
    </Box>
  )
}

export default Portfolio