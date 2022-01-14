import { getReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Reviews = ({ navCategories }) => {
    const [reviews, setReviews] = useState([])
    const [sortBy, setSortBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("desc")
    const [category, setCategory] = useState(undefined)
    const categories = navCategories
    const handleChange = (event) => {
        const targetId = event.target.id
        const inputVal = event.target.value
        if (targetId === 'sort-by') {
            setSortBy(inputVal)
        } else if (targetId === 'category') {
            setCategory(inputVal)
        } else if (targetId === 'order') {
            setOrderBy(inputVal)
        }
    }
    useEffect(() => {
        getReviews(category, sortBy, orderBy).then((reviewsData) => {
            setReviews(reviewsData)
        })
    }, [handleChange])
    return (
        <div>
            <form>
            <label id="category">Category:</label>
            <select id="category" onChange={handleChange}>
            <option disabled selected value="undefined" id="undefined" >Select a category</option>
            {categories.map((cat) => {
            let category = cat.slug
                return (
                    <option value={category} id={category} >{category}</option>
                );
            })}
            </select>
            <span id="category-err"></span>
            <br/>
            <label id="sort-by">Sort by:</label>
            <select id="sort-by" onChange={handleChange}>
            <option selected value="created_at" id="sort-by" >created_at</option>
            <option value="comment_count" id="sort-by" >comment_count</option>
            <option value="votes" id="sort-by" >votes</option>
            </select>
            <span id="sort-by-err"></span>
            <select id="order" onChange={handleChange}>
            <option selected value="desc" id="desc" >descending</option>
            <option value="asc" id="asc">ascending</option>
            </select>
            <span id="asc-desc-err"></span>
            <br/>
            </form>
            <ul>
            {reviews.map((review) => {
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

export default Reviews;