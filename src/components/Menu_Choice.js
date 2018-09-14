import React from 'react';
import Color_Menu from './Color_Menu';
import Brand_Menu from './Brand_Menu';
import Type_Menu from './Type_Menu';
import Results from './Results';
import Big_Brand_Menu from './Big_Brand_Menu';

class Menu_Choice extends React.Component{
    constructor(props){
        super(props)       
    }


render(){
    var one = <p>HHHHHH</p>;
    if(this.props.menu === 'color'){
        one = <Color_Menu  
        menu={this.props.menu} 
        display={this.props.display} 
        resultsHandler={this.props.resultsHandler}
        />
    }
    else if (this.props.menu === 'type'){
        one = <Type_Menu 
        menu={this.props.menu} display={this.props.display}
        resultsHandler={this.props.resultsHandler}/>
    }
    else if (this.props.menu === 'brand'){
        one = <Brand_Menu 
        menu={this.props.menu} display={this.props.display}
        resultsHandler={this.props.resultsHandler}/>
    }
    return(
        <div className='menu_choice'>

        {one}
        
        
        
        </div>
    )
}
}

export default Menu_Choice;