import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"

import javascriptCertification from '../assets/badges/jse-40-01-jse-certified-entry-level-javascript-programmer.webp'
import pythonCertification from '../assets/badges/pcep-30-02-pcep-certified-entry-level-python-programmer.webp'


const imageHolder = {
  display:"flex",
  alignContent:"center",
  justifyContent:"center",
  flexWrap:"wrap",
  gap:"1em",
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
        gap:".3em",
      }}>
        <a href='/justin_libhart_resume.pdf' download>Download resume</a>
        <a href='/justin_libhart_resume.pdf' target="_blank">View resume in new tab</a>
        <Box sx={imageHolder}>
          <Tooltip title={"See Verification"}><a target='_blank' href='https://verify.openedg.org/?id=BRCN.s61L.LaQL' >
            <img src={javascriptCertification} width="200px" alt='JSE - Certified Entry-Level JavaScript Programmer Certification'/>
          </a></Tooltip>
          <Tooltip title={"See Verification"}><a target='_blank' href='https://verify.openedg.org/?id=bpk1.NUup.OEBM' >
            <img src={pythonCertification} width="200px" alt='PCEP - Certified Entry-Level Python Programmer Certification'/>
          </a></Tooltip>
        </Box>
      </Box>
    </>
  )
}

export default Certifications