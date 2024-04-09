// import { Box, Divider, Typography } from "@mui/material"
import Divider from "@mui/material/Divider"
import Skill from "./Skill"
import skillsList from "./skills.json"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

type SkillObject = {
  name:string,
  level:string
  percent:number,
}

const typedSkillsList:Array<SkillObject> = [...skillsList]


const Skills = () => {

  return (
    <Box sx={{
      rotate:"-4deg",
      padding:"20px",
      height:"fit-content",
      backgroundColor:"#78c3a7",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      minWidth:"300px",
      maxWidth:"25vw",
    }}>
      <Divider><Typography variant="h4">Skills</Typography></Divider>
      <Box sx={{
        display:"grid",
        gridTemplateColumns: ".75fr 1.5fr 2fr",
      }}>
        {
          typedSkillsList.map((skill: SkillObject) => (
            <Skill key={skill.name + skill.level} skill={skill} />
          ))
        }
      </Box>

    </Box>
  )
}

export default Skills