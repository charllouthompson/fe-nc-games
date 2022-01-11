import { Link } from "react-router-dom";

const FrontpageList = ({ navCategories }) => {
    const categories = navCategories

    return (
        <div>
        <ul>
            <li>
                <Link to={`/reviews/all`}>
                View all reviews
                </Link>
            </li>
            {categories.map((category) => {
            return (
                <li>
                    <Link to={`/reviews/${category.slug}`}>
                    <p key={category.slug}>{category.slug} reviews</p>
                    </Link>
                </li>
            );
            })}
        </ul>
        </div>
    )
};

export default FrontpageList;
  