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
        <Link to={`/reviews`}>
          <p>all reviews</p>
        </Link>
        </p>
      </nav>
    );
};

export default NavBar;
  