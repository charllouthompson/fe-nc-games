import { Link } from "react-router-dom";

const NavCategories = ({ navCategories }) => {
    const categories =  navCategories

    return (
        <div>
        <ul>
            {categories.map((category) => {
            return (
                <li>
                    <Link to={`/reviews/${category.slug}`}>
                    <p key={category.slug}>{category.slug}</p>
                    </Link>
                </li>
            );
            })}
        </ul>
        </div>
    )
};

export default NavCategories;
  