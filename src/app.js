//three steps to using npm modules. 1.Install 2.Import 3.Use
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import Clutch from './components/Clutch';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Styles_Menu from './components/Styles_Menu';
import In_The_Wild from './components/In_The_Wild';


const routes = (
    <BrowserRouter>
    <div>
    <Route path='/' component={Clutch} exact={true}/>
    <Route path='/in_the_wild' component={In_The_Wild} />
    </div>
    
    </BrowserRouter>
);
ReactDOM.render( routes , document.getElementById('app'));





