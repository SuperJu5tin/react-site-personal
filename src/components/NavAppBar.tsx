 
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
        <Tooltip title={"Back To Top"} placement="bottom-start" ><Link variant="h6" sx={{ flexGrow: 1, textAlign:"left" }} color="inherit" underline="none" href="#top">Justin Libhart</Link></Tooltip>

        <Tooltip title={"My Main Website"}><Button variant="text" sx={redirectorStyle} color="inherit" href="https://justinlibhart.dev">Main Site</Button></Tooltip>
        <Tooltip title={"My Website Created in Vue"}><Button variant="text" sx={redirectorStyle} color="inherit" href="https://vue.justinlibhart.dev">Vue Site</Button></Tooltip>
      </Toolbar>
    </AppBar>
  );
}
