// import meetingdetails from "../../components/meetups/meetupdetails"
import { MongoClient ,ObjectId } from 'mongodb';
import MEEtingdetails from '../../components/meetups/meetupdetails';

function Meatupdetails(props){

    return <MEEtingdetails
     name={props.postData.name}
    title={props.postData.title}
    email={props.postData.email}
    // solution={props.postData.solution}
    question={props.postData.question}
    
    
    
    />
}
export async function getStaticPaths(){
    
    const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
    const db=client.db();
    
    
    
    const postsCollections=db.collection('posts');
  const meetups= await postsCollections.find({},{_id:1}).toArray();
  client.close();  
  return{
        fallback: false,
        paths:meetups.map(meetup=>({
            params:{
                meetupid:meetup._id.toString()
            }
        }))
        
        
        
        
        
        
    }
}
export async function getStaticProps(context){
    const meetingID=context.params.meetupid;
    const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
    const db=client.db();
    
    
    
    const postsCollections=db.collection('posts');
  const Selectedposts= await postsCollections.findOne({_id: ObjectId(meetingID)});
  client.close();  
    return{
        props:{
            postData:{
                id: Selectedposts._id.toString(),
                title: Selectedposts.title,
                name: Selectedposts.name,
                email: Selectedposts.email,
                solution: Selectedposts.solution || null,
                question: Selectedposts.question || null
            }
        }
    }
}
export default Meatupdetails;