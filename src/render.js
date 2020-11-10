import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, sendMessage,  updateNewMessageText} from './redux/state';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
