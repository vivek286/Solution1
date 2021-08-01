import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const questionInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredquestion = questionInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredname = nameInputRef.current.value;
    const enteredDescription = [];

    const postData = {
      title: enteredTitle,
      email: enteredemail,
      name: enteredname,
      question: enteredquestion,
      solution: enteredDescription,
    };

    props.onAddMeetup(postData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='question'>Question</label>
          <textarea
            id='question'
            required
            rows='5'
            ref={questionInputRef}
          ></textarea>
        </div>
        {/* <div className={classes.control}>
          <label htmlFor='description'>Solution</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div> */}
        <div className={classes.actions}>
          <button>Add Question</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
