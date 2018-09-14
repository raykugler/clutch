import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../../styles/styles.scss';

const Routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    <Route path='/teachers' component={Instructors}/>
    <Route path='/findus' component={Instructors}/>
   
    </div>
  </BrowserRouter>
);

export default Routes;