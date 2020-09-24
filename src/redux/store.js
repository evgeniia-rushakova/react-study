import profileReducer, {addpost, updatetext} from "./profile-reducer";
import dialogsReducer, {addMessage, updateMsgText} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
                    ], newMessage: ''},
                {name: "Ted", id: 2, messages: [
                        {id: 1, text: "helloTed", date: '12.03.25'},
                        {id: 2, text: "loremTed", date: '12.03.25'},
                        {id: 3, text: "ipsumTed", date: '12.03.25'},
                        {id: 4, text: "dolorTed", date: '12.03.25'},
                        {id: 5, text: "sitTed", date: '12.03.25'},
                        {id: 6, text: "amesTed", date: '12.03.25'},
                    ], newMessage: ''},
                {name: "Lilly", id: 3, messages: [
                        {id: 1, text: "Lillyhello", date: '12.03.25'},
                        {id: 2, text: "Lillylorem", date: '12.03.25'},
                        {id: 3, text: "Lillyipsum", date: '12.03.25'},
                        {id: 4, text: "Lillydolor", date: '12.03.25'},
                        {id: 5, text: "Lillysit", date: '12.03.25'},
                        {id: 6, text: "Lillyames", date: '12.03.25'},
                    ], newMessage: ''},
                {name: "Marshall", id: 4, messages: [
                        {id: 1, text: "Marshallhello", date: '12.03.25'},
                        {id: 2, text: "Marshalllorem", date: '12.03.25'},
                        {id: 3, text: "Marshallipsum", date: '12.03.25'},
                        {id: 4, text: "Marshalldolor", date: '12.03.25'},
                        {id: 5, text: "Marshallsit", date: '12.03.25'},
                        {id: 6, text: "Marshallames", date: '12.03.25'},
                    ], newMessage: ''},
                {name: "Robin", id: 5, messages: [
                        {id: 1, text: "Robinhello", date: '12.03.25'},
                        {id: 2, text: "Robinlorem", date: '12.03.25'},
                        {id: 3, text: "Robinipsum", date: '12.03.25'},
                        {id: 4, text: "Robindolor", date: '12.03.25'},
                        {id: 5, text: "Robinsit", date: '12.03.25'},
                        {id: 6, text: "Robinames", date: '12.03.25'},
                    ], newMessage: ''}
            ],
        },
        sidebar : {}
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
        profileReducer(this._state.profile, action);
        dialogsReducer(this._state.messages.dialogs[0], action);
        sidebarReducer(this._state, action);
        switch (action.type) {
            case addpost: {
                this._renderTree();
                break;
            }
            case updatetext: {
                this.subscribe(this._renderTree);
                break;
            }
            case updateMsgText:
            {
                this.subscribe(this._renderTree);
                break;
            }
            case addMessage:
            {
                this._renderTree();
                break;
            }
        }
    }
}


window.store = store;

export default store;
