import classes from './meetupdetails.module.css'


function meetingdetails(props){
    return( <section className={classes.details}>
        
        <h1>{props.title}</h1>
        <h2>Question</h2>
        
        {props.question}
        {/* <h2>Solution</h2> */}
        {/* <p className={classes.solution}>{props.solution}</p> */}
        <h3>{props.name}</h3>
    </section>);
}

export default meetingdetails;