import Box from '@mui/material/Box'
import Snake from './Projects/Snake'
// import RandomWebsites from './Projects/RandomWebsites'

function Portfolio() {
  return (
    <Box sx={{
      display:"flex",
      flexWrap:"wrap",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      gap:"3em",
      paddingBlock:"3em",
      paddingInline:"1em",
    }}>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignContent:"center",
      }}>
        <h3 style={{borderBottom:'solid .1em'}} >Projects are available on <a href='testout.com'>github</a></h3>
      </Box>
      <Snake />
      {/* <RandomWebsites /> */}
    </Box>
  )
}

export default Portfolio