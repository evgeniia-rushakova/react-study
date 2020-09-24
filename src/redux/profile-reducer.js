const cloneDeep = require('clone-deep');

export const addpost = 'ADD-POST';
export const updatetext = 'UPDATE-TEXT';

export let postActionCreator = () =>
    ({
        type: addpost
    })

export let newPostActionCreator = (text) => ({
    type: updatetext,
    msg: text
})

let initialState = {
    posts: [
        {message: "First Post", likes: 1, dislikes: 7},
        {message: "secpost", likes: 3, dislikes: 1},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState,action) => {
    let stateCopy = cloneDeep(state);
    switch (action.type) {
        case addpost: {
            let newPost = {
                message: stateCopy.newPostText,
                likes: 0,
                dislikes: 0
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            break;
        }
        case updatetext: {
            stateCopy.newPostText = action.msg;
            break;
        }
    }

    return stateCopy;
}
export default profileReducer;