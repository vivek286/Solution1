// /api/new-meetup
import {MongoClient} from 'mongodb'
async function handler(req,res){
    
if(req.method==='POST'){
    const data=req.body;
    // var solution=[{}]

    const {name, email ,question,title  ,solution}=data;
    const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
    const db=client.db();
    
    
    
    const postsCollections=db.collection('posts');
const result=await postsCollections.insertOne(data);
console.log(result);
client.close();

res.status(201).json({message: 'meetup inserted'});

}
}

export default handler;