import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
//import style from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main-wrapper">
                    <Navigation/>
                    <div className="content">
                        <Route  store={props.store} path='/messages' render={()=><DialogsContainer/>}/>
                        <Route store={props.store} path='/profile' render={()=><Profile/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
