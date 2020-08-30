import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialog";
//import style from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route} from 'react-router-dom'
import {updateText} from "./redux/state";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main-wrapper">
                    <Navigation/>
                    <div className="content">
                        <Route  path='/messages' render={()=><Dialogs data={props.state.messages}/>}/>
                        <Route path='/profile' render={()=><Profile posts={props.state.profile.posts}  addPost={props.addPost} newPostText={props.state.profile.newPostText} updateText={props.updateText}/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
