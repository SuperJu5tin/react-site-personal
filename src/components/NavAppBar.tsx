 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
 
const redirectorStyle = {
  marginLeft:"10px",
  fontSize:".72em"
}

export default function NavAppBar() {

  return (
    <AppBar position="sticky">
      <Toolbar sx={{
        backgroundColor:"black",
      }}>
        <Tooltip title={"Back To Top"} placement="bottom-start" ><Link variant="h6" sx={{ flexGrow: 1 }} color="inherit" underline="none" href="#top">Justin Libhart</Link></Tooltip>
        <Tooltip title={"View About Me"}><Button variant="text" sx={redirectorStyle} color="inherit" href="#about-me">About Me</Button></Tooltip>
        <Tooltip title={"View Portfolio"}><Button variant="text" sx={redirectorStyle} color="inherit" href='#portfolio'>Portfolio</Button></Tooltip>
        <Tooltip title={"View Certifications"}><Button variant="text" sx={redirectorStyle} color="inherit" href='#certifications'>Certifications</Button></Tooltip>
      </Toolbar>
    </AppBar>
  );
}