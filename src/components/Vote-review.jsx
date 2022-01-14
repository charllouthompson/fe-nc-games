import { useState, useEffect } from "react";
import { getReviewById, voteReview } from "../utils/api";


const VoteReview = ({review_id}) => {
    const [votes, setVotes] = useState()
    const [reviewVoted, setReviewVoted] = useState(false)
    const reviewId = review_id
    const handleVote = (event) => {
        const value = event.target.value
        if (reviewVoted === false) {
            voteReview(reviewId, value).then((newVotes) => {
                setVotes(newVotes)
                setReviewVoted(true)
            })
        }
    }
    useEffect(() => {
        getReviewById(reviewId).then((review) => {
            const votes = review.votes
            setVotes(votes)
        })
    }, [voteReview])
    return (
        <div>
            <p>Votes: {votes}</p>
            <button value="like" onClick={handleVote}>Like</button>
            <button value="dislike" onClick={handleVote}>Dislike</button>
        </div>
    )
}

export default VoteReview;