import { useState, useEffect } from "react";
import { getCommentsByReview, deleteCommentById } from "../utils/api";
import { useParams } from "react-router-dom";
import VoteComment from "./Vote-comment";


const CommentsByReview = () => {
    const [comments, setComments] = useState([])
    const { review_id } = useParams()

    const deleteOnClick = (id) => {
        deleteCommentById(id)
    }

    useEffect(() => {
        getCommentsByReview(review_id).then((response) => {
            setComments(response)
        })
    }, [deleteOnClick])
    return (
        <div>
            <h2>Comments</h2>
            <ul>
            {comments.map((comment) => {
            return (
                <li key={comment.comment_id}>
                    <p>Posted by {comment.author}</p>
                    <p>{comment.body}</p>
                    
                    {/* <VoteComment comment_id={comment.comment_id} review_id={review_id}/> */}

                    <button onClick={() => {
                         deleteOnClick(comment.comment_id)
                        }}>Delete</button>
                </li>
            );
            })}
            </ul>
        </div>
    )
}

export default CommentsByReview;