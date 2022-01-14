import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://be-games-practice.herokuapp.com/api",
  });

export const getCategories = () => {
    return gamesApi.get('/categories').then((response) => {
        return response.data.categories
    })
}

export const getReviewsByCategories = (category, sortBy) => {
    if (sortBy) {
        return gamesApi.get(`/reviews?category=${category}&&sort_by=${sortBy}`).then((response) => {
        return response.data.reviews
        })
    } else {
        return gamesApi.get(`/reviews?category=${category}`).then((response) => {
            return response.data.reviews
        })
    }   
}

export const getAllReviews = (sortBy) => {
    if (sortBy) {
        return gamesApi.get(`/reviews?sort_by=${sortBy}`).then((response) => {
        return response.data.reviews
        })
    } else {
        return gamesApi.get('/reviews').then((response) => {
            return response.data.reviews
        })
    }
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