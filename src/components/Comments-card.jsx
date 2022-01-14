import { useState } from "react";

const CommentsCard = ({ category, review_id, children }) => {
    const [seeCommentsOpen, setSeeCommentOpen] = useState(false)
    const toggleCommentOpen = () => {
        setSeeCommentOpen(!seeCommentsOpen)
    }
    const [postCommentOpen, setPostCommentOpen] = useState(false)
    const togglePostOpen = () => {
        setPostCommentOpen(!postCommentOpen)
    }
    return (
        <div>
            <button onClick={toggleCommentOpen}>
               {seeCommentsOpen ? 'Close comments' : 'See comments'}
            </button>
            {seeCommentsOpen && children[0]}
            <br/>
            <button onClick={togglePostOpen}>
               {postCommentOpen ? 'Close post comment' : 'Post a comment'}
            </button>
            {postCommentOpen && children[1]}
        </div>
    )
}

export default CommentsCard