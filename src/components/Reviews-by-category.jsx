import { useParams } from "react-router";
import { getReviewsByCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewsByCategory = () => {
    const { category } = useParams()
    const [categoryReviews, setCategoryReviews] = useState([])
    useEffect(() => {
        getReviewsByCategories(category).then((reviewsData) => {
            setCategoryReviews(reviewsData)
        })
    }, [category])
    return (
        <div>
            <ul>
            {categoryReviews.map((review) => {
            return (
                <li>
                    <Link to={`/reviews/${category}/${review.review_id}`}>
                    <p key={review.review_id}>{review.title}</p>
                    </Link>
                </li>
            );
            })}
        </ul>
        </div>
    )
}

export default ReviewsByCategory;