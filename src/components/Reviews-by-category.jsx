import { useParams } from "react-router";
import { getReviewsByCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewsByCategory = () => {
    const { category } = useParams()
    const [categoryReviews, setCategoryReviews] = useState([])
    useEffect(() => {
        getReviewsByCategories(category).then((reviewsData) => {
            console.log(reviewsData)
            setCategoryReviews(reviewsData)
        })
    }, [])
    console.log("after review", categoryReviews)
    return (
        <div>
            <p>Hi</p>
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