import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([])

    const handleSortChange = (event) => {
        const inputVal = event.target.value
        console.log(inputVal)
    }
    const handleSortSubmit = (event) => {
        event.preventDefault()
            
    }







    useEffect(() => {
        getAllReviews().then((reviewsData) => {
            setAllReviews(reviewsData)
        })
    }, [])
    return (
        <div>
            <h2>All reviews</h2>
            <form>
            <label id="sort-by">Sort by:</label>
            <select id="sort-by" onClick={handleSortChange}>
            <option selected disabled>Please select an option</option>
            <option value="created_at" id="sort-by" onClick={handleSortChange} >created_at</option>
            <option value="comment_count" id="sort-by" onClick={handleSortChange} >comment_count</option>
            <option value="votes" id="sort-by" onClick={handleSortChange} >votes</option>
            </select>
            <span id="sort-by-err"></span>
            <br/>
            <button type="submit">Search</button>
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