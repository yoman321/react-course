import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';

function NewMeetup(){
    const navigate = useNavigate();
    function NewMeetupHandler(submitData){
        fetch(
            'https://test-project2-bc6f8-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {//Possibility of error handling
            navigate('/');
        })
    }
    return(
        <section>
            <h1>Add a New Meetup</h1>
            <NewMeetupForm addNewMeetup={NewMeetupHandler}/>
        </section>
    )
}
export default NewMeetup;