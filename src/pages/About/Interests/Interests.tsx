import FactCardHolder from "./FactCardHolder"
import completeInterestsJSON from "./interests.json"
import Box from "@mui/material/Box"
import "./interests.css"

type InterestObject = {
  [key:string]: Array<string>
}

const typedCompleteInterestsObject:InterestObject = {...completeInterestsJSON}
const interestsList = Object.keys(typedCompleteInterestsObject)

const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string ) => {

  const copyOfList = [...list]
  copyOfList[copyOfList.length - 1] = diffLast + copyOfList[copyOfList.length - 1]
  const newSentence = copyOfList.join(delimiter)
  return newSentence

}

const Interests = () => {

  return (
    <Box sx={{
      height:"fit-content",
      width:"max(300px, 30vw)",
      padding:"20px",
      display:"flex",
      flexDirection:"column",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      rotate:"-2deg",
      justifyContent:"center",
      alignContent:"space-around",
      boxShadow:"3px 3px 3px 3px #555"
    }}>
      <h1 className="test" >
        My Biggest Interests
      </h1>
      <Box sx={{borderTop:"solid", width:"100%"}} ></Box>
      <h2 style={{}}>{listJoinDiffLast(interestsList, ", ", " and ")}</h2>
      {
        interestsList.map((factType: string) => (
          <FactCardHolder key={factType} factType={factType} />
        ))
      }
    </Box>
  )
}

export default Interests