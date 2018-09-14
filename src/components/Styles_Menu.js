import React from 'react';
import Helmet_Table from './Helmet_Table';
import Main from './Main';
import Helmet_Sort from './Helmet_Sort';

class Styles_Menu extends React.Component{
    constructor(props){
        super(props)
    }   
    componentDidMount=(client)=>{
        console.log(`main ${this.props.type34}`);
        console.log(`main ${this.props.silverstate}`);
        console.log(`main ${this.props.type}`);
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