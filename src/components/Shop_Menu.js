import React from 'react';
import Menu_Or_Results from './Menu_Or_Results';

class Shop_Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menu: 'color',
            menuToggle: 0,
        }       
    }
    handleColorMenuClick=()=>{
        this.setState({menu: 'color'});
        this.setState({menuToggle: 0});
    }
    handleTypeMenuClick=()=>{
        this.setState({menu: 'type'});
        this.setState({menuToggle: 0});
    }    
    handleBrandMenuClick=()=>{
        this.setState({menu: 'brand'});
        this.setState({menuToggle: 0});
    }
    handleBigBrandMenuClick=()=>{
        this.setState({menu: 'bigbrand'});
        this.setState({menuToggle: 0});

    }

    render(){
        return(
            <div className='shop_menu'>
            <p className='search_by'>search by...</p>
            <div className='tabs'>
                <div className='color_tab tab' 
                onClick={this.handleColorMenuClick}>
                    <p className='menu_text'>color</p>
                </div>

                <div className='styles_tab tab' 
                onClick={this.handleTypeMenuClick}>
                    <p className='menu_text'>type</p>
                </div>

                <div className='brands_tab tab' 
                onClick={this.handleBrandMenuClick} >
                    <p className='menu_text'>brand</p>
                    </div>
                
            </div>
            <div className='long_stripes'>
            <div className='blue_long_stripe'></div>
            <div className='yellow_long_stripe'></div>
            <div className='green_long_stripe'></div></div>
            <Menu_Or_Results 
            menu={this.state.menu}
            menuToggle={this.state.menuToggle}
            handleBigBrandMenuClick={this.handleBigBrandMenuClick}
            />
          
            </div>
            
        )
    }
}
export default Shop_Menu;