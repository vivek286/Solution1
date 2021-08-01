import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
function MeetupItem(props) {
  const router=useRouter();
  function showdetailshandler(){
    router.push('/solutionlist/'+props.id);

  }
  function confirmemail(){
    router.push('/verify/'+props.id);
  }
  function deletepostverify(){
    router.push('/deletequestion/'+props.id);
  }
  function addsolution(){
    router.push('/');
  }
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.name}</address>
        </div>
        <div className={classes.image}>
          <div className={classes.question_contain}>{props.question}</div>
          
        </div>
        
        <div className={classes.actions}>
          <button onClick={showdetailshandler}>Show Solutions</button>
          <button onClick={confirmemail}>Edit Question</button>
          <button onClick={addsolution}>Add Solution</button>
          <button onClick={deletepostverify}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
