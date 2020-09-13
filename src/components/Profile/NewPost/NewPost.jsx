import React from "react";
import style from './NewPost.module.css'
import {newPostActionCreator, postActionCreator} from "../../../redux/state";


const NewPost = (props) => {

    let newPostElement = React.createRef();

    function addNewPost() {
        props.dispatch(postActionCreator());
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch(newPostActionCreator(text));
    }

    return (
        <div className={style.post}>
            <div className={style.form}>
                            <textarea onChange={onPostChange} ref={newPostElement} className={style.text}
                                      name="new-post-text" id="" cols="30" rows="5" placeholder='Your post text here'
                                      value={props.newPostText}>
                            </textarea>
                <button className={style.button} type="submit" onClick={addNewPost}>Send</button>
            </div>
        </div>
    )
}

export default NewPost;