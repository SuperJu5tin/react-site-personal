import Divider from "@mui/material/Divider"
import Skill from "./Skill"
import skillsList from "./skills.json"
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
    }}>
      <Divider><h1>Skills</h1></Divider>
      <Box sx={{
        display:"grid",
        gridTemplateColumns: ".75fr 1.5fr 2fr",
        // gridTemplateColumns: "repeat(auto-fit, 1fr)",
        alignItems:"center",
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