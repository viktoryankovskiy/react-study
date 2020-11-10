import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          <Sidebar state={props.state.sidebar}/>
          <div className="content">
            <Route path='/profile' render={() => <Profile 
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/dialogs' render={() => <Dialogs 
                state={props.state.dialogsPage}
                sendMessage={props.sendMessage}
                updateNewMessageText={props.updateNewMessageText} />} />
            <Route path='/news' render={News} />
            <Route path='/settings' render={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
