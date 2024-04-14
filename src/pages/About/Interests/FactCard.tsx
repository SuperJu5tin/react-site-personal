import Card from '@mui/material/Card'
import { useState } from 'react'

type CardProps = {
  fact: string,
}


// min max and options
const minFont: number = 1
const maxFont: number = 2.5
const colorOptions: Array<string> = ["#05b774", "#d7fedc", "#74c07a", "#40976a"]


const FactCard = ({fact}: CardProps) => {

  const [fontSize] = useState((Math.random() * (maxFont-minFont)) + minFont)
  const [color] = useState(colorOptions[Math.floor(Math.random() * (colorOptions.length - 1))])


  return (
    <Card className='factCard' sx={{...{
      padding:"10px",
      textAlign:"center",
      cursor: "pointer",
      color:"#555",
      border:"solid 1px",
      transition:"all .2s",
      // random
      fontSize:`${fontSize}em`,
      background:color,
    },
    }}>
      {fact}
    </Card>
  )
}

export default FactCard