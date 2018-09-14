import React from 'react';

class Big_Brand_Menu extends React.Component{
    constructor(props){
        super(props)
        
    }

  
render(){
    return(
        <div className='big_brand_menu'>
            <p className='big_brand_title'> Our Brands </p>
            <div className='big_brand_block' onClick={this.props.biltwellbrandChoice}>
                <img src='./images/biltwell-logo-new.png' className='big_logo_image' />
                <p className='big_brand_text'>
                Every Biltwell product will be engineered and 
                priced to meet standards of function, performance 
                and value that make sense in the real world. Simple and honest 
                motorcycle parts and accessories that anyone can afford, 
                and that everyone will be proud to use and own.</p>
            </div>

            <div className='big_brand_block' onClick={this.props.bellbrandChoice}>
            <p className='big_brand_text'>
                Anything Bell is designed to fulfill a specific set of needs—without frosting.  
                In the end we are creating an essential performance tool. 
                We build it to use it.</p>
                <img src='./images/bell-logo.png' className='big_logo_image' />
            </div>

            <div className='big_brand_block' onClick={this.props.shoeibrandChoice}>
            <p className='big_brand_text'>
            The evolution and production of our world-class helmet 
            line is a meticulous process that combines the very latest 
            in technology with consumer feedback, modern testing practices, advanced materials, 
            and over 50 years of helmet building experience.</p>
                <img src='./images/shoei_logo.png' className='big_logo_image' />
            </div>

           

        </div>
    )
}
}

export default Big_Brand_Menu;