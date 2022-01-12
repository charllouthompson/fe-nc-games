
import NavCategories from "./Nav-categories";
import { Link } from "react-router-dom";

const NavBar = ({navCategories}) => {
    return (
      <nav>
        <p>
        <Link to={`/`}>
          <p>home</p>
        </Link>
        </p>
        <p>
        <Link to={`/reviews/all`}>
          <p>all reviews</p>
        </Link>
        </p>
        <NavCategories navCategories={navCategories} />
      </nav>
    );
};

export default NavBar;
  