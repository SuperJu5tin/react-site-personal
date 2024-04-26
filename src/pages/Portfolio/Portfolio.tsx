import Box from '@mui/material/Box'
import Snake from './Projects/Snake'

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
        <h3 style={{borderBottom:'solid .1em'}} >Past projects are available on <a target='_blank' href='https://github.com/SuperJu5tin' aria-label="View Justin's Github Profile">github</a></h3>
      </Box>
      <Snake />
    </Box>
  )
}

export default Portfolio