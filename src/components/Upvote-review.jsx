import { useState, useEffect } from "react";
import { getReviewById, upvoteReview } from "../utils/api";


const UpvoteReview = ({review_id}) => {
    const [votes, setVotes] = useState()
    const reviewId = review_id
    const handleClick = () => {
        upvoteReview(reviewId).then((newVotes) => {
            setVotes(newVotes)
        })
    }
    useEffect(() => {
        getReviewById(reviewId).then((review) => {
            const votes = review.votes
            setVotes(votes)
        })
    }, [handleClick])
    return (
        <div>
            <p>Votes: {votes}</p>
            <button onClick={handleClick}>Like!</button>
        </div>
    )
}

export default UpvoteReview;





