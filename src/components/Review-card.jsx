import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import UpvoteReview from "./Upvote-review";


const ReviewCard = () => {
    const { review_id } = useParams()
    const [singleReview, setSingleReview] = useState([])
    useEffect(() => {
        getReviewById(review_id).then((reviewData) => {
            setSingleReview(reviewData)
        })
    }, [])

    return (
        <div>
            <p>{singleReview.title}</p>
            <p>{singleReview.category}</p>
            <p>{singleReview.owner}</p>
            <img src={singleReview.img_url} alt="game avatar"/>
            <p>{singleReview.review_body}</p>
            <UpvoteReview review_id={review_id}/>
            <p>Comments: {singleReview.comment_count}</p>
            <button>See comments...</button>
        </div>
    )





}

export default ReviewCard;