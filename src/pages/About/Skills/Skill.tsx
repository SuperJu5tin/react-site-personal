// import { Box, Typography } from '@mui/material'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

type CardProps = {
  skill:SkillObject
}

type SkillObject = {
  name:string,
  level:string
  percent:number,
}



const Skill = ({skill}: CardProps) => {
  const name = skill.name
  const level = skill.level
  const percent = skill.percent
  
  return (
    <>
      <Box sx={{
        gridColumn:"1"
      }}>
        <Typography>
          {name} 
        </Typography>
      </Box>
      <Box>
        <Typography >
          : {level}
        </Typography>
      </Box>
      <Box sx={{
        marginLeft:"10px",
        height:"20px",
        backgroundColor:"#d7fedc",
        borderRadius:"10px",
        overflow:"hidden",
      }}>
        <Box sx={{
          width:`${percent+2}%`,
          height:"20px",
          backgroundColor:"green"
        }}>
        </Box>  
      </Box>
      
    </>
    
  )
}

export default Skill