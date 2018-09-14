import React from 'react';

import Helmet_Sort from './Helmet_Sort';

class Styles_Menu extends React.Component{
    constructor(props){
        super(props)
    }   


render(){
    return(
        <div className='styles_menu'>
    <Helmet_Sort type34={this.props.type34}
    threeQuarter={this.props.threeQuarter} 
    blackstate={this.props.blackstate} 
    black={this.props.black} 
    silverstate={this.props.silverstate}
    silver={this.props.silver} />
        
        </div>
    )
}    
}


export default Styles_Menu;