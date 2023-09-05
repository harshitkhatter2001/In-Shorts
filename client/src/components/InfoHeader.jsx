
import {Box, Typography, styled} from '@mui/material';

const Container=styled(Box)(({theme})=> ({
background: '#f44336',
    color: '#FFFFFF',
    display:'flex',
    alignItems:'center',
    height:'50px',
    borderRadius:'100px',
    marginBottom:'60px',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

}));

const Text=styled(Typography)`
font-size:14px;
font-weight: 300;
margin-left:50px;
 
`
const Image=styled('img')({
    height:34,
    '&:last-child':{
        margin:' 0 50px 0 20px'
    }
})
const InfoHeader =() => {
const applestore='https://assets.inshorts.com/website_assets/images/appstore.png'
const googlestore='https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Container>
        <Text>
            For the best experience use In-Short app on your smartphone
        </Text>

            <Box style={{display:'flex', marginLeft:'auto'}}> 
                <Image src={applestore} alt="apple" />
                <Image src={googlestore} alt="google" />
            </Box>
        </Container >
    )

}

export default InfoHeader;