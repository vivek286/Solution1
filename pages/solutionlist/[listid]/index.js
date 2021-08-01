import { useRef } from 'react';
import Card from '../../../components/ui/Card';
import classes from '../../../components/meetups/MeetupItem.module.css';
import router from 'next/router';
import { MongoClient ,ObjectId } from 'mongodb';


function displaysolution(props){

    return (
        
    <Card>
 <div className={classes.content}>
        <h3>{props.postData.title}</h3>
        <address>{props.postData.name}</address>
      </div>
      <div className={classes.actions}>
      <button >Show Solutions</button>
      <button >Edit Solution</button>
      <button >Delete Solution</button>
    </div>

    </Card>
    
   
      );
}
export async function getStaticProps(context){
    const emailid=context.params.listid;
    const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
    const db=client.db();
    
    
    
    const postsCollections=db.collection('posts');
    const Selectedposts= await postsCollections.findOne({_id: ObjectId(emailid)});
    return{
       
        props:{
            postData:{
               solution:Selectedposts.solution||Selectedposts.description||null,
                email: Selectedposts.email,
                name:Selectedposts.name,
                urlid: emailid,
                title:Selectedposts.title
            }
        }
    }
}

/// Fetching from mongo db
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
                listid:meetup._id.toString()
            }
        }))
        
        
        
        
        
        
    }
}


export default displaysolution;