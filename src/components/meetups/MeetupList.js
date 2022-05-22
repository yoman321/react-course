import MeetupItem from "./MeetupItem";
import Styles from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={Styles.list}>
      {props.items.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
