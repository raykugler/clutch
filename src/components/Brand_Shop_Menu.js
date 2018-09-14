import React from 'react';
import Menu_Choice from './Menu_Choice';
import Menu_Or_Results from './Menu_Or_Results';
import Big_Brand_Menu from './Big_Brand_Menu';
import Brand_Menu_Or_Results from './Brand_Menu_Or_Results';

class Brand_Shop_Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menu: 'color',
            menuToggle: 0,
        }       
    }
    

    render(){
        return(
            <div className='shop_menu'>
            <div className='long_stripes'>
            <div className='blue_long_stripe'></div>
            <div className='yellow_long_stripe'></div>
            <div className='green_long_stripe'></div></div>
            <Brand_Menu_Or_Results 
            handleBigBrandMenuClick={this.props.handleBigBrandMenuClick}/>
          
            </div>
            
        )
    }
}
export default Brand_Shop_Menu;