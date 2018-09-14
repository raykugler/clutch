import React from 'react';

class Top_Bar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='top_bar'>
                <img src='.\images\baseline_shopping_cart_black_18dp.png' className='cart'/>
            </div>
        )    }
}
export default Top_Bar;