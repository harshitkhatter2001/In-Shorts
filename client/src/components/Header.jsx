import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu, Padding} from  '@mui/icons-material'
const StyledHeader=styled(AppBar)`
    background: orange;
    height: 100px;
`
const MenuIcon=styled(Menu)`
color:#000
`

const Image=styled('img')({
    height: 90, 
    margin:'auto', 
    PaddingRight : 70

})
   
const Header=() =>{
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo"/> 
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;