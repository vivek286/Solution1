import { useRef } from 'react';
import Card from '../../../components/ui/Card';
import classes from '../../../components/meetups/NewMeetupForm.module.css';
import router from 'next/router';
import { MongoClient ,ObjectId } from 'mongodb';


   function verifyemail(props){
   
    const emailid__=props.postData.urlid;
    const emailInputRef = useRef();
    function backtohome(){
        router.push('/');
    }
   async function submitHandler(){
        
    const enteredemail = emailInputRef.current.value;
         if(enteredemail===props.postData.email){
            const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
            const db=client.db();
            
            
            
            const postsCollections=db.collection('posts');
            db.postsCollections.update({_id:ObjectId(props.postData.urlid)},{})
            return router.push('/deletequestion/verified/'+emailid__);
         }
         else{
             alert('incorrect email');
           
         }
    }
    return (
        <Card>
            <form className={classes.form} >
            <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email'  ref={emailInputRef}  />
        </div>
        <label htmlFor='email'>Are you sure you want to delete question</label>
        <div className={classes.actions}>
        
          <button onClick={submitHandler}>Yes</button>
          <button onClick={backtohome}>No</button>
        </div>
            </form>
        </Card>
    )
}

export async function getStaticProps(context){
    const emailid=context.params.verifyid;
    const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
    const db=client.db();
    
    
    
    const postsCollections=db.collection('posts');
    const Selectedposts= await postsCollections.findOne({_id: ObjectId(emailid)});
    return{
       
        props:{
            postData:{
               
                email: Selectedposts.email,
                urlid: emailid,
                // db:db,
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
                verifyid:meetup._id.toString()
            }
        }))
        
        
        
        
        
        
    }
}

export default verifyemail;