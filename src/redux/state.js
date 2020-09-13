const addpost = 'ADD-POST';
const updatetext = 'UPDATE-TEXT';
const addMessage = 'ADD-MSG';
const updateMsgText='UPDATE-MSG-TEXT';
let store = {
    _state: {
        profile: {
            posts: [
                {message: "First Post", likes: 1, dislikes: 7},
                {message: "secpost", likes: 3, dislikes: 1},
            ],
            newPostText: ''
        },
        messages: {
            dialogs: [
                {name: "Barny", id: 1, messages: [
                        {id: 1, text: "helloBarny", date: '12.03.25'},
                        {id: 2, text: "loremBarny", date: '12.03.25'},
                        {id: 3, text: "ipsumBarny", date: '12.03.25'},
                        {id: 4, text: "dolorBarny", date: '12.03.25'},
                        {id: 5, text: "sitBarny", date: '12.03.25'},
                        {id: 6, text: "amesBarny", date: '12.03.25'},
                    ]},
                {name: "Ted", id: 2, messages: [
                        {id: 1, text: "helloTed", date: '12.03.25'},
                        {id: 2, text: "loremTed", date: '12.03.25'},
                        {id: 3, text: "ipsumTed", date: '12.03.25'},
                        {id: 4, text: "dolorTed", date: '12.03.25'},
                        {id: 5, text: "sitTed", date: '12.03.25'},
                        {id: 6, text: "amesTed", date: '12.03.25'},
                    ]},
                {name: "Lilly", id: 3, messages: [
                        {id: 1, text: "Lillyhello", date: '12.03.25'},
                        {id: 2, text: "Lillylorem", date: '12.03.25'},
                        {id: 3, text: "Lillyipsum", date: '12.03.25'},
                        {id: 4, text: "Lillydolor", date: '12.03.25'},
                        {id: 5, text: "Lillysit", date: '12.03.25'},
                        {id: 6, text: "Lillyames", date: '12.03.25'},
                    ]},
                {name: "Marshall", id: 4, messages: [
                        {id: 1, text: "Marshallhello", date: '12.03.25'},
                        {id: 2, text: "Marshalllorem", date: '12.03.25'},
                        {id: 3, text: "Marshallipsum", date: '12.03.25'},
                        {id: 4, text: "Marshalldolor", date: '12.03.25'},
                        {id: 5, text: "Marshallsit", date: '12.03.25'},
                        {id: 6, text: "Marshallames", date: '12.03.25'},
                    ]},
                {name: "Robin", id: 5, messages: [
                        {id: 1, text: "Robinhello", date: '12.03.25'},
                        {id: 2, text: "Robinlorem", date: '12.03.25'},
                        {id: 3, text: "Robinipsum", date: '12.03.25'},
                        {id: 4, text: "Robindolor", date: '12.03.25'},
                        {id: 5, text: "Robinsit", date: '12.03.25'},
                        {id: 6, text: "Robinames", date: '12.03.25'},
                    ]}
            ],
            newMessage: ''
        }
    },
    getState() {
        return this._state;
    },
    _renderTree() {
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    dispatch(action) {
        switch (action.type) {
            case addpost: {
                let newPost = {
                    message: this._state.profile.newPostText,
                    likes: 0,
                    dislikes: 0
                }
                this._state.profile.posts.push(newPost);
                this._state.profile.newPostText = '';
                this._renderTree();
                break;
            }
            case updatetext: {
                this._state.profile.newPostText = action.msg;
                this.subscribe(this._renderTree);
                break;
            }
            case updateMsgText:
            {
                this._state.messages.newMessage = action.msg;
                this.subscribe(this._renderTree);
                break;
            }
            case addMessage:
            {
                let newMsg = {
                    text: this._state.messages.newMessage,
                    date: '00:00:00',
                   /* id: action.id*/
                    id:0
                }
                this._state.messages.dialogs[0].messages.push(newMsg);
                this._state.messages.newMessage = '';
                this._renderTree();
                break;
            }
        }
    }
}

export let postActionCreator = () =>
    ({
        type: addpost
    })

export let newPostActionCreator = (text) => ({
    type: updatetext,
    msg: text
})

export let msgActionCreator = () =>
    ({
        type: addMessage
    })

export let newMsgActionCreator = (text) => ({
    type: updateMsgText,
    msg: text
})

window.store = store;

export default store;
