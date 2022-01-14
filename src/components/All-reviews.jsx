import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    const [sortBy, setSortBy] = useState(false)

    const handleSortChange = (event) => {
        const inputVal = event.target.value
        console.log(inputVal)
        setSortBy(inputVal)
    }

    useEffect(() => {
        getAllReviews(sortBy).then((reviewsData) => {
            setAllReviews(reviewsData)
        })
    }, [handleSortChange])


    return (
        <div>
            <h2>All reviews</h2>
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