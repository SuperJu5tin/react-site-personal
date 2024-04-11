import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"

import javascriptCertification from '../assets/badges/jse-40-01-jse-certified-entry-level-javascript-programmer.png'
import pythonCertification from '../assets/badges/pcep-30-02-pcep-certified-entry-level-python-programmer.png'


const imageHolder = {
  display:"flex",
  alignContent:"center",
  justifyContent:"center",
  flexWrap:"wrap",
}

const Certifications = () => {

  return (
    <>
      <Box sx={{
        marginTop:"50px",
        display:"flex",
        flexDirection:"column",
        justifyItems:"center",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        flexWrap:"wrap",
      }}>

        <Tooltip sx={{marginLeft:"auto"}} title={"Download Resume"}><a href='/justin_libhart_resume.pdf' download>Resume</a></Tooltip>
        <Box sx={imageHolder}>
          <a target='_blank' href='https://verify.openedg.org/?id=BRCN.s61L.LaQL' >
            <img src={javascriptCertification} width="200px" alt='JSE - Certified Entry-Level JavaScript Programmer Certification'/>
          </a>
          <a target='_blank' href='https://verify.openedg.org/?id=bpk1.NUup.OEBM' >
            <img src={pythonCertification} width="200px" alt='PCEP - Certified Entry-Level Python Programmer Certification'/>
          </a>
        </Box>
      </Box>
    </>
  )
}

export default Certifications