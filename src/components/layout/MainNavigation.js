import { Link } from "react-router-dom";
import Styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={Styles.header}>
      <h3 className={Styles.logo}>React Course</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to='/newMeetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorite'>Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
