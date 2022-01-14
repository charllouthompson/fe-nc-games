import { Link } from "react-router-dom";

const FrontpageList = ({ navCategories }) => {
    const categories = navCategories

    return (
        <div>
        <h2>Welcome!</h2>
        <h2>Find a review</h2>
        <ul>
            <li>
                <Link to={`/reviews`}>
                View reviews
                </Link>
            </li>
            {/* {categories.map((category) => {
            return (
                <li>
                    <Link to={`/reviews/${category.slug}`}>
                    <p key={category.slug}>{category.slug} reviews</p>
                    </Link>
                </li>
            );
            })} */}
        </ul>
        </div>
    )
};

export default FrontpageList;
  