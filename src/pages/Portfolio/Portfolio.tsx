import Box from '@mui/material/Box'
import Snake from './Projects/Snake'
// import RandomWebsites from './Projects/RandomWebsites'

function Portfolio() {
  return (
    <Box sx={{
        display:"grid",
        paddingTop:"100px",
        gap:"4em"
      }}>
      <Snake />
      {/* <RandomWebsites /> */}
    </Box>
  )
}

export default Portfolio