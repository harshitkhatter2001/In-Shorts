
import{Card, CardContent, Grid, Typography,styled } from "@mui/material";
const Image=styled('img')({
    height: 280,
    width:' 80%',
    objectFit:'cover',
    borderRadius: 10
});

const Container=styled(CardContent)`
    padding:5px;
    padding-bottom:2px !important;
`

const Text=styled(Typography)`
    font-weight:300;
    font-size:22px;
    line-height:27px;
`
const Component=styled(Card)`
    margin-bottom:30px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0/ 16%), 0 2px 10px 0 rgb( 0 0 0 / 12%);
` 

const RightContainer=styled(Grid)(({theme})=> ({
    margin:' 10px 0 0 -40px',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.between('sm','lg')]:{
        padding:'0 5px'
    },
    [theme.breakpoints.down('sm') ]:{
        margin:'5px 0'
    }
}))

const Author=styled(Typography)`
    color: #808290;
    font-size:12px;
    line-height: 22px;
`

const Description=styled(Typography)`
    line-height:22px;
    color:#44444D;
    margin-top:5px;
    font-weight:300;
`

const Publisher=styled(Typography)`
    font-size: 12px;
    text-decoration:none;
    margin-top:auto;
    margin-bottom: 20px;
    '&>*':{
        textDecoration:'none'
    }
`
const Article =({data})=>{
    return (
        <Component>
            <Container>
            <Grid container >
                <Grid lg={5} sm={5} xs={12}item>
                    <Image src = {data.url}/>

                </Grid>
                <RightContainer lg={7} md={7} xs={12}  item> 
                <Text>{data.title}</Text>
            <Author>
                <b>short</b> by {data.author} /{new Date(data.timestamp).toDateString()}
            </Author>
            <Description>{data.description}</Description>
            <Publisher>read more at <a style={{textDecoration:'none', color:'#000'}} href={data.link} target="_blank"><b>{data.publisher}</b></a></Publisher>
                </RightContainer>
                </Grid>
            </Container>
        </Component>
    )
}

export default Article;