// import { Box, Divider, Typography } from "@mui/material"
import Typography from "@mui/material/Typography"
import FactCardHolder from "./FactCardHolder"
import completeInterestsJSON from "./interests.json"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"

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

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{
      marginLeft:width <= 500 ? "" : "auto",
      height:"fit-content",
      minWidth:"250px",
      maxWidth:"40vw",
      gridRow:"span 2",
      padding:"20px",
      flexWrap:"wrap",
      backgroundColor:"#78c3a7",
      width:"fit-content",
      color:"#555",
      borderRadius:"30px",
      border:"solid",
      rotate:"-2deg",
    }}>
      <Typography variant="h5" sx={{
        textAlign:"center"
      }}>
        My Biggest interests are {listJoinDiffLast(interestsList, ", ", " and ")}
      </Typography>
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