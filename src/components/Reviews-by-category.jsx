import { useParams } from "react-router";
import { getReviewsByCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewsByCategory = ({ navCategories }) => {
    const { category } = useParams()
    const [sortBy, setSortBy] = useState(false)
    const [categoryReviews, setCategoryReviews] = useState([])
    
    const handleSortChange = (event) => {
        const inputVal = event.target.value
        console.log(inputVal)
        setSortBy(inputVal)
    }
    
    useEffect(() => {
        getReviewsByCategories(category, sortBy).then((reviewsData) => {
            setCategoryReviews(reviewsData)
        })
    }, [category, handleSortChange])
    return (
        <div>
            <h2>{category}</h2>
            <form>
            <label id="sort-by">Sort by:</label>
            <select id="sort-by" onChange={handleSortChange}>
            <option selected value="created_at" id="sort-by" >created_at</option>
            <option value="comment_count" id="sort-by" >comment_count</option>
            <option value="votes" id="sort-by" >votes</option>
            </select>
            <span id="sort-by-err"></span>
            <br/>
            </form>
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