import MeetupList from "../components/meetups/MeetupList";
import { Fragment, useEffect , useState } from "react";
import { MongoClient } from "mongodb";
import Head from 'next/head';

function homepage(props){
  return (
  <Fragment>
     <Head>
      <title>
         CP NOTEPAD
      </title>
      
    </Head>
    <MeetupList meetups={props.meetups}/>
  </Fragment>
  );
  
}
export async function getStaticProps(){
  const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
  const db=client.db();
  
  
  
  const postsCollections=db.collection('posts');
  const meetUUps=((await postsCollections.find().toArray()));
  meetUUps.reverse();
  // fetch('/api/meetups');
  client.close();

  return{
    props:{
      meetups: meetUUps.map(meetup=>({
        title:meetup.title,
        email:meetup.email,
        name:meetup.name,
        question:meetup.question || null,
        solution: meetup.solution || null,
        id:meetup._id.toString()

      }))
    },
    revalidate: 10
  };

}

export default homepage;