import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import {useRef} from 'react';

function NewMeetupForm(props){
    const refTitle = useRef();
    const refImage = useRef();
    const refAddress = useRef();
    const refDescription = useRef();

    function onSubmitHandler(event){
        event.preventDefault();

        const submitTitle = refTitle.current.value;
        const submitImage = refImage.current.value;
        const submitAddress = refAddress.current.value;
        const submitDescription = refDescription.current.value;

        const submitData = {
            title: submitTitle,
            image: submitImage,
            address: submitAddress,
            description: submitDescription
        }
        props.addNewMeetup(submitData)
    }
    return(
        <Card>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' ref={refTitle}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' ref={refImage}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='adress'>Meetup Address</label>
                    <input type='text' id='address' ref={refAddress}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id='description' rows='5' ref={refDescription}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm;