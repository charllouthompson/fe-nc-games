// // COMMENT VOTE COMPONENT IS CURRENTLY UNUSABLE AS API HAS NO GET COMMENT BY COMMENT ID


// import { useState, useEffect } from "react";
// import { getCommentById, upvoteComment, downvoteComment } from "../utils/api";


// const VoteComment = ({comment_id, review_id}) => {
//     const [votes, setVotes] = useState()
//     const commentId = comment_id
//     const reviewId = review_id
//     const handleLike = () => {
//         upvoteComment(commentId).then((newVotes) => {
//             setVotes(newVotes)
//         })
//     }
//     const handleDislike = () => {
//         downvoteComment(commentId).then((newVotes) => {
//             setVotes(newVotes)
//         })
//     }
//     useEffect(() => {
//         getCommentById(commentId).then((review) => {
//             const votes = review.votes
//             setVotes(votes)
//         })
//     }, [])
//     return (
//         <div>
//             <p>Votes: {votes}</p>
//             <button onClick={handleLike}>Like</button>
//             <button onClick={handleDislike}>Dislike</button>
//         </div>
//     )
// }

// export default VoteComment;

