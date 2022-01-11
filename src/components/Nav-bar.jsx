
import NavCategories from "./Nav-categories";
import { Link } from "react-router-dom";

const NavBar = ({navCategories}) => {
    return (
      <nav>
        <p>
        <Link to={`/reviews/all`}>
          <p>Home</p>
        </Link>
        </p>
        <NavCategories navCategories={navCategories} />
      </nav>
    );
};

export default NavBar;
  