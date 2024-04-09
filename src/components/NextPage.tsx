import { Box } from "@mui/material"

type CardProps = {
  pageId: string,
  color: string,
}

const HyphonToSpace = (title: string) => {
  let words: Array<string> = title.toLowerCase().split('-')
  return words.join(' ')
}

const NextPage = ({pageId, color = "#89b1df"}: CardProps) => {
  return (
    <>
      <Box id={pageId} sx={{
        zIndex:"-1",
        position:"relative",
        height:"90px",
        display:"flex"
      }}>

      </Box>
      <Box  sx={{
        padding:"10px",
        height:"5vh",
        color:"#555",
        background:`${color}`,
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        borderTop:"solid",
        borderBottom:"solid",
      }}>
        <h1 style={{
          margin:"auto"
        }} >
          {HyphonToSpace(pageId).toUpperCase()}
        </h1>
      </Box>
    </>
    
  )
}

export default NextPage