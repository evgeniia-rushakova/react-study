import React from "react";
import MyPosts from "./MyPosts";
import {newPostActionCreator, postActionCreator} from "../../../redux/profile-reducer";

import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePost: (text) => dispatch(newPostActionCreator(text)),
        addPost: () => dispatch(postActionCreator())
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;