import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import VoteReview from "./Vote-review";
import CommentsCard from "./Comments-card"
import CommentsByReview from "./Comments-by-review";
import PostComment from "./Post-comment";


const ReviewCard = () => {
    const { review_id } = useParams()
    const [singleReview, setSingleReview] = useState([])
    useEffect(() => {
        getReviewById(review_id).then((reviewData) => {
            setSingleReview(reviewData)
        })
    }, [])
    const category = singleReview.category
    return (
        <div>
            <h2>{singleReview.title}</h2>
            <p>Posted by {singleReview.owner}</p>
            <img src={singleReview.img_url} alt="game avatar"/>
            <p>{singleReview.review_body}</p>
            <VoteReview review_id={review_id}/>
            <p>Comments: {singleReview.comment_count}</p>
            <CommentsCard category={category} review_id={review_id}>
                <CommentsByReview category={category} review_id={review_id} />
                <PostComment category={category} review_id={review_id} />
            </CommentsCard>    
            {/* <button>
                <Link to={`/reviews/${category}/${review_id}/comments`}>
                    See comments
                </Link>
            </button>
            <button>
                <Link to={`/reviews/${category}/${review_id}/post`}>
                    Post a comment
                </Link>
            </button> */}
                
        </div>
    )





}

export default ReviewCard;