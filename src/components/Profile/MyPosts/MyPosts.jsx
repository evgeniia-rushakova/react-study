import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPost from "../NewPost/NewPost";

const MyPosts = (props) => {
    let postElem = (props.posts).map(el=><Post message={el.message} likes={'likes: ' + el.likes} dislikes={'dislikes:' + el.dislikes}/>)
    return (
        <div>
            <NewPost addPost={props.addPost} newPostText={props.newPostText} updateText={props.updateText}/>
            <div className={style.posted}>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts