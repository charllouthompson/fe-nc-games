import { useState, useEffect } from "react";
import { getReviewById, upvoteReview, downvoteReview } from "../utils/api";


const VoteReview = ({review_id}) => {
    const [votes, setVotes] = useState()
    const reviewId = review_id
    const handleLike = () => {
        upvoteReview(reviewId).then((newVotes) => {
            setVotes(newVotes)
        })
    }
    const handleDislike = () => {
        downvoteReview(reviewId).then((newVotes) => {
            setVotes(newVotes)
        })
    }
    useEffect(() => {
        getReviewById(reviewId).then((review) => {
            const votes = review.votes
            setVotes(votes)
        })
    }, [handleLike, handleDislike])
    return (
        <div>
            <p>Votes: {votes}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default VoteReview;





