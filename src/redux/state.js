import {renderEntireTree} from './../render'

let state = {
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
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export let sendMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
}


export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  renderEntireTree(state);
}


export default state;