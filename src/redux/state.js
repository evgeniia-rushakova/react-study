import {renderTree} from "../render";

const state = {
    profile: {
        posts : [
            {message:"First Post", likes: 1, dislikes: 7},
            {message:"secpost", likes: 3, dislikes: 1},
        ],
        newPostText:''
    },
    messages: {
        dialogs : [
            {name: "Barny", id: 1},
            {name: "Ted", id: 2},
            {name: "Lilly", id: 3},
            {name: "Marshall", id: 4},
            {name: "Robin", id: 5}
        ],
        messages: [
            {id: 1, text: "hello", date: '12.03.25'},
            {id: 2, text: "lorem", date: '12.03.25'},
            {id: 3, text: "ipsum", date: '12.03.25'},
            {id: 4, text: "dolor", date: '12.03.25'},
            {id: 5, text: "sit", date: '12.03.25'},
            {id: 6, text: "ames", date: '12.03.25'},
        ]
    }
}
window.state = state;
export let addPost = () => {
    let newPost = {
        message: state.profile.newPostText,
        likes: 0,
        dislikes: 0
    }
    state.profile.posts.push(newPost);
    state.profile.newPostText = '';
    renderTree(state);
}

export let updateText = (msg) => {
    debugger;
    state.profile.newPostText = msg;
    renderTree(state);
}

export default state;