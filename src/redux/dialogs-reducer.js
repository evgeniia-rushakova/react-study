export const addMessage = 'ADD-MSG';
export const updateMsgText='UPDATE-MSG-TEXT';
const cloneDeep = require('clone-deep');

export let msgActionCreator = () =>
    ({
        type: addMessage
    })

export let newMsgActionCreator = (text) => ({
    type: updateMsgText,
    msg: text
})
 
let initialState = {
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
};

const dialogsReducer = (state = initialState,action) => {
    let stateCopy = cloneDeep(state);
    switch (action.type) {
        case updateMsgText:
        {
            stateCopy.newMessage = action.msg;
            break;
        }
        case addMessage:
        {
            let newMsg = {
                text: state.newMessage,
                date: '00:00:00',
                /* id: action.id*/
                id:0
            }
            stateCopy.dialogs[0].messages.push(newMsg);
            stateCopy.newMessage = '';
            break;
        }
    }

    return stateCopy;
}
export default dialogsReducer;