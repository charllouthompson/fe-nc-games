import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        getAllReviews().then((reviewsData) => {
            setAllReviews(reviewsData)
        })
    }, [])
    return (
        <div>
            <ul>
            {allReviews.map((review) => {
            let category = review.category
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

export default AllReviews;