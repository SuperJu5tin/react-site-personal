// import { Box, Card } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useState } from 'react'

type CardProps = {
  fact: string,
  hoverSetter: Function,
}



// min max and options
const minFont: number = 20
const maxFont: number = 35
const colorOptions: Array<string> = ["#05b774", "#d7fedc", "#74c07a", "#40976a"]



const InterestCard = ({fact, hoverSetter}: CardProps) => {

  const [isHovering, setIsHovering] = useState(false)

  const [fontSize] = useState((Math.random() * (maxFont-minFont)) + minFont)
  const [color] = useState(colorOptions[Math.floor(Math.random() * (colorOptions.length - 1))])

  const hoveringSX = {
    fontSize:`${fontSize+10}px`,
    flexGrow:"2",
    textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
  }

  const nonHoveringSX = {
    fontSize:`${fontSize}px`, 
    flexGrow:"1",
  }

  const makeHovering = () => {
    setIsHovering(true)
    hoverSetter(true)
  }

  const makeNotHovering = () => {
    setIsHovering(false)
    hoverSetter(false)
  }


  return (
    <Box sx={isHovering ? {transition:"all .2s",} : {padding:`${(maxFont-minFont)/2}px`, transition:"all .2s",}}>
      <Card onMouseEnter={makeHovering} onMouseLeave={makeNotHovering} sx={{...{
        margin:"auto",
        padding:"10px",
        textAlign:"center",
        cursor: "pointer",
        color:"#555",
        background:color,
        border:"solid 1px",
        transition:"all .2s",
      },
        ...isHovering ? hoveringSX : nonHoveringSX
      }}>
        {fact}
      </Card>
    </Box>
    
    
  )
}

export default InterestCard