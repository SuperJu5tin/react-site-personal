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
      {/* <Box id={pageId} sx={{ */}
      <div id={pageId} style={{
        zIndex:"-1",
        position:"relative",
        height:"90px",
        display:"flex"
      }}>

      </div>
      
      {/* </Box>
      <Box  sx={{ */}
      <div style={{
        padding:"1.5em",
        height:"50px",
        color:"#555",
        background:`${color}`,
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        borderTop:"solid",
        borderBottom:"solid",
      }}>
        <h1>
          {HyphonToSpace(pageId).toUpperCase()}
        </h1>
      {/* </Box> */}
      </div>
    </>
    
  )
}

export default NextPage