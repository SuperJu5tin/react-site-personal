import Box from "@mui/material/Box"


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
        gridColumn:"1",
      }}>
        <p style={{margin:"0px"}}>
          {name} 
        </p>
      </Box>
      <Box>
        <p style={{margin:".25em"}}>
          : {level}
        </p>
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