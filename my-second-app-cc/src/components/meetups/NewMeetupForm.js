import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredaddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupdata = {
            title: enteredTitle,
            image : enteredImage,
            address : enteredaddress,
            description : enteredDescription
        }

        console.log(meetupdata);

        //sending data to NewMeetups.js file
        props.onAddMeetup(meetupdata);
    }


    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
             <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Meetup Event Description </label>
                <textarea  required id='description' rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>

}

export default NewMeetupForm;