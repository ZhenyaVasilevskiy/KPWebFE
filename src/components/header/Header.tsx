import stl from "./header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header: React.FC = () => {
    return (
    <div className={stl.headerWrapper}>
      <div className={stl.headerContent}>
        <h1 className={stl.headerName}>KEEPCORN</h1>
        
        <div className={stl.actionButtons}>
            <SearchIcon data-testid="SearchIcon" className={stl.searchIcon} sx={{marginRight:"10px"}}/>
            <Button variant="contained" className="Button" sx={{borderRadius:"10px",marginRight:"10px"}}>Sign Up</Button>
            <MenuIcon className={stl.searchIcon}/>

        </div>
      </div>
    </div>
    )
}

export default Header;