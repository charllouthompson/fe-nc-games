import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { postCommentToReview } from "../utils/api";
import { UserContext } from "../contexts/User-context";

const PostComment = () => {
    const { review_id } = useParams()
    const { user } = useContext(UserContext);
    const defaultUser = user.username

    const [commentInput, setCommentInput] = useState('')
    const handleCommentChange = (event) => {
        const inputVal = event.target.value
        setCommentInput(inputVal)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        postCommentToReview(review_id, defaultUser, commentInput).then((response) => {
            setCommentInput('')
        })   
    }

    //EXAMPLE API DOESN'T HAVE A GET USERS ROUTE, BUT HAVE ONE IN NC_GAMES
    //WHEN HOSTED, NEED TO USE THIS TO MAKE AN ACCEPTED USERS ARRAY FOR ONLY ALLOW USERS TO POST COMMENTS

    return (
        <div>
            <h2>Post a comment</h2>
            <p>Username: {defaultUser}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment-body">Comment: </label>
                <input id="comment-body" type="text" onChange={handleCommentChange} value={commentInput}/>
                <span id="comment-body-err"></span>
                <br/>
                <button type="submit">Post comment</button>
                <br/>
            </form>
        </div>
    )
}

export default PostComment;


