import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../../styles/styles.scss';
import Clutch from '../Clutch';

const Routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Clutch} exact={true}/>
  
   
    </div>
  </BrowserRouter>
);

export default Routes;