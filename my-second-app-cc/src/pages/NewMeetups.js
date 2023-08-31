import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetups(){
    const navigate = useNavigate();
    
    function AddMeetupHandler(meetupData) {
        fetch(
        'https://react-test-app-8c79e-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
            'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }


    return <div><h1>New Meetups Page</h1>
    <NewMeetupForm onAddMeetup = {AddMeetupHandler}></NewMeetupForm>
    </div>;
}

export default NewMeetups;