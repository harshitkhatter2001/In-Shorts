import axios from 'axios';
// import news from '../../../server/model/news-schema';

export const getNews =async()=>{
    const URL='http://localhost:8000';
    try{
           return await axios.get(`${URL}/news`);
    }
    catch(error){
        console.log('Error ', error)
    }
}
