import { useState } from "react"
import completeInterestsJSON from "./interests.json"
import FactCard from "./FactCard"
// import { Box, Button } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type CardProps = {
  factType: string,
}

type InterestObject = {
  [key:string]: Array<string>
}

const typedCompleteInterestsObject:InterestObject = {...completeInterestsJSON}


const FactCardHolder = ({factType}: CardProps) => {
  
  const [remainingFactsList, setRemainingFactsList] = useState<Array<string>>(typedCompleteInterestsObject[factType])

  const returnFact = () => {
    if (remainingFactsList.length >= 1) {
      const randX: number = Math.floor(Math.random() * remainingFactsList.length)
      const newInterest: string = remainingFactsList[randX]
      setRemainingFactsList(prev => prev.filter(remainingFact => remainingFact !== newInterest ))
      return([newInterest])
    }
    else return([])
  }

  const [activeFactsList, setActiveFactsList] = useState<Array<string>>(returnFact)
  

  const learnNewFact = () => {

    if (remainingFactsList.length >= 1) {
      const randX = Math.floor(Math.random() * remainingFactsList.length)
      const newInterest = remainingFactsList[randX]
      setRemainingFactsList(prev => prev.filter(remainingFact => remainingFact !== newInterest ))
      setActiveFactsList((oldArray: Array<string>) => [...oldArray, newInterest])
    }
  }

  
  return (
    <Box sx={{display:"grid"}}>
      <Button variant="contained" color="success" onClick={learnNewFact} endIcon={<AddRoundedIcon />} sx={{
        textTransform:"none",
        marginRight:"auto",
        marginTop:"10px",
        marginLeft:"5px",
        
      }}>More {factType} Favorites</Button>
      <Box className="factCardHolder">
        {
          activeFactsList.map((fact: string) => (
            <FactCard key={factType + fact} fact={fact} />
          ))
        }
      </Box>
    </Box>
  )
}

export default FactCardHolder