import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://be-games-practice.herokuapp.com/api",
  });

export const getCategories = () => {
    return gamesApi.get('/categories').then((response) => {
        return response.data.categories
    })
}

export const getReviewsByCategories = (category) => {
    return gamesApi.get(`/reviews?category=${category}`).then((response) => {
        return response.data.reviews
    })
}

export const getAllReviews = () => {
    return gamesApi.get('/reviews').then((response) => {
        return response.data.reviews
    })
}

export const getReviewById = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((response) => {
        return response.data.review
    })
}

export const upvoteReview = (review_id) => {
    return gamesApi.patch(`/reviews/${review_id}`, {
        inc_votes: 1
    }).then((response) => {
        return response.data.review.votes
    })
}

export const downvoteReview = (review_id) => {
    return gamesApi.patch(`/reviews/${review_id}`, {
        inc_votes: -1
    }).then((response) => {
        return response.data.review.votes
    })
}

export const upvoteComment = (comment_id) => {
    return gamesApi.patch(`/comments/${comment_id}`, {
        inc_votes: 1
    }).then((response) => {
        return response.data.comment.votes
    })
}

export const downvoteComment = (comment_id) => {
    return gamesApi.patch(`/comments/${comment_id}`, {
        inc_votes: -1
    }).then((response) => {
        return response.data.comment.votes
    })
}

export const getCommentsByReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((response) => {
        return response.data.comments
    })
}

export const deleteCommentById = (comment_id) => {
    return gamesApi.delete(`/comments/${comment_id}`).then((response) => {
        console.log("Comment deleted")
        return response.data 
    })
}

export const postCommentToReview = (review_id, usernameInput, commentInput) => {
    console.log("in api")
    console.log("id = ", review_id)
    console.log("username = ", usernameInput)
    console.log("body = ", commentInput)

    return gamesApi.post(`/reviews/${review_id}/comments`, {
        username: usernameInput,
        body: commentInput
    }).then((response) => {
        return response
    })


}



/*
- list of all reviews : get api/reviews
- view page for each category with a list of reviews : get api/reviews?category=:category
- view individual review : get api/reviews/:review_id
- view a review’s comments : get api/reviews/:review_id/comments
- votes on a review and see change immediately : patch api/reviews/:review_id and set inc_votes as one on body, plus in useEffect have change of votes in the re-render array
- post comment to review : post api/reviews/:review_id/comments with a default user in the body of post request but comment should be received from user input
- Sort reviews by created_at, comment_count, votes : get api/reviews?sort_by=:PARAMETER, will need a different request and component for each
- delete my comments : delete api/comments/:comment_id, but need to only give the option to delete if username matches the default user, 
Maybe do this from the get reviews by review ID page


*/