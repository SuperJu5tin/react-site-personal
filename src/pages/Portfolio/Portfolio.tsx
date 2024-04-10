import Box from '@mui/material/Box'
import Snake from './Projects/Snake'

function Portfolio() {
  return (
    <Box sx={{
        display:"flex",
        paddingTop:"100px"
      }}>
      <Snake />
    </Box>
  )
}

export default Portfolio