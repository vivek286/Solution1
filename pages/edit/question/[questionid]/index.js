// import { useRef } from 'react';
// import Card from '../../../../components/ui/Card';
// import classes from '../../../../components/meetups/NewMeetupForm.module.css';
// import router from 'next/router';
// // import { getStaticProps } from '../../../verify/[emailid]';
// import { MongoClient ,ObjectId } from 'mongodb';


// function editquestion(props){
//     const questionInputRef = useRef();
//     const titleInputRef = useRef();
//     // event.preventDefault();
//     function updatetomongodb(enteredTitle,enteredquestion){
//     // const client= MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
//     // const db=client.db();
//     // const postsCollections=db.collection('posts');
//     // db.postsCollections.update({"_id":ObjectId(props.postData.urlid)},{"title":enteredTitle,"email":props.postData.email,"name":props.postData.name,"question":enteredquestion,"description":props.postData.descrpition});
//     }
//     function submitHandler(){
//       const enteredquestion = questionInputRef.current.value;
//       const enteredTitle=titleInputRef.current.value || props.postData.title;
      
//       // update question to mongodb
//       // updatetomongodb(enteredTitle,enteredquestion);

//       router.push('/'+props.postData.urlid);
//     }
//     function CancleFun(){
//       router.push('/');
//     }
    
//     return (
//         <Card>
//             <form className={classes.form} onSubmit={submitHandler} >
//             <div className={classes.control}>
//           <label htmlFor='title'>Title</label>
//           <input type='text' id='title' ref={titleInputRef} />
//         </div>
//             <div className={classes.control}>
//           <label htmlFor='question'>Edit Question</label>
//           <textarea
//             id='question'
//             required
//             rows='5'
//             ref={questionInputRef}
//           ></textarea>
//         </div>
//         <div className={classes.actions}>
//           <button>Update Question</button>
//           <button onClick={CancleFun}>Cancle</button>
//         </div>
//             </form>
//         </Card>
//     )
// }









// //Add mongodb data and change it
// export async function getStaticProps(context){
//   const emailid=context.params.questionid;
//   const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
//   const db=client.db();
  
  
  
//   const postsCollections=db.collection('posts');
//   const Selectedposts= await postsCollections.findOne({_id: ObjectId(emailid)});
//   return{
     
//       props:{
//           postData:{
//               title: Selectedposts.title,
//               name: Selectedposts.name,
//               email: Selectedposts.email,
//               descrpition: Selectedposts.descrpition||null,
//               urlid: emailid
//           }
//       }
//   }
// }

// /// Fetching from mongo db
// export async function getStaticPaths(){
  
//   const client=await MongoClient.connect('mongodb+srv://Admin:Vivek123@cluster0.t5g3x.mongodb.net/posts?retryWrites=true&w=majority');
//   const db=client.db();
  
  
  
//   const postsCollections=db.collection('posts');
// const meetups= await postsCollections.find({},{_id:1}).toArray();
// client.close();  
// return{
//       fallback: false,
//       paths:meetups.map(meetup=>({
//           params:{
//               questionid:meetup._id.toString()
//           }
//       }))
      
      
      
      
      
      
//   }
// }

// export default editquestion;
function how(){
  return <h1>Questionedited</h1>
}


export default how;