let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1,message:'Hi! How are you?', likesCount: 12},
        {id: 2,message:'Fine!) Thank you', likesCount: 3},
        {id: 3,message:'Great!', likesCount: 4},
        {id: 4,message:'Sorry, i must go! Chao', likesCount: 5},
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: 1,name:'Ivan',avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png'},
        {id: 2,name:'Sasha',avatar: 'https://admacademy.in/wp-content/uploads/2020/04/91-512.png'},
        {id: 3,name:'Olia',avatar: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'},
        {id: 4,name:'Pasha',avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSSQSptSy-pj9vs04wWzrVh5cc1VGa5inMSg&usqp=CAU'},
        {id: 5,name:'Elena',avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'},
        {id: 6,name:'Viktoria',avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'},
      ],
      messages: [
        {id: 1,message:'Hi)'},
        {id: 2,message:'How are you?))'},
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        {id: 1,name:'Ivan',avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png'},
        {id: 2,name:'Sasha',avatar: 'https://admacademy.in/wp-content/uploads/2020/04/91-512.png'},
        {id: 3,name:'Olia',avatar: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'},
        {id: 4,name:'Pasha',avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSSQSptSy-pj9vs04wWzrVh5cc1VGa5inMSg&usqp=CAU'},
        {id: 5,name:'Elena',avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'},
        {id: 6,name:'Viktoria',avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'},
      ],
      test: [
        {test1: "test"},
        {test2: "test"},
        {test3: "test"},
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  sendMessage(){
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage){
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer){
    this._callSubscriber = observer;
  }
}
export default store;
window.state = store;