import FactCardHolder from "./FactCardHolder"
import completeInterestsJSON from "./interests.json"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"


type InterestObject = {
  [key:string]: Array<string>
}

const typedCompleteInterestsObject:InterestObject = {...completeInterestsJSON}
const interestsList = Object.keys(typedCompleteInterestsObject)

const listJoinDiffLast = (list: Array<string>, delimiter: string, diffLast: string ) => {

  let copyOfList = [...list]
  copyOfList[copyOfList.length - 1] = diffLast + copyOfList[copyOfList.length - 1]
  let newSentence = copyOfList.join(delimiter)
  return newSentence

}

const Interests = () => {

  return (
    <Box sx={{
      height:"fit-content",
      padding:"20px",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      width:"fit-content",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      rotate:"-2deg",
    }}>
      <h2 style={{
        textAlign:"center"
      }}>
        My Biggest interests are {listJoinDiffLast(interestsList, ", ", " and ")}
      </h2>
      <Divider />
      {
        interestsList.map((factType: string) => (
          <FactCardHolder key={factType} factType={factType} />
        ))
      }
    </Box>
  )
}

export default Interests