import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          email={meetup.email}
          title={meetup.title}
          question={meetup.question}
          
        />
      ))}
    </ul>
  );
}

export default MeetupList;
