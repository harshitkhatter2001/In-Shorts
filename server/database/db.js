
import mongoose, { mongo } from 'mongoose';


const Connection=async (username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-q8zdxbb-shard-00-00.wn1fpja.mongodb.net:27017,ac-q8zdxbb-shard-00-01.wn1fpja.mongodb.net:27017,ac-q8zdxbb-shard-00-02.wn1fpja.mongodb.net:27017/?ssl=true&replicaSet=atlas-60i40k-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{


     await   mongoose.connect(URL,{useNewUrlParser:true});
     console.log('database connected')
    }
    catch(error){
        console.log('error while connecting', error);
    }
}
export  default Connection;