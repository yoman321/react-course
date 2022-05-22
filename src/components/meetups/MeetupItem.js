import Styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <Card>
      <li className={Styles.item}>
        <div className={Styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={Styles.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Styles.actions}>
          <button>To Favorite</button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;
