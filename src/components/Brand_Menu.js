import React from 'react';

class Brand_Menu extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
        <div className='brand_menu'>
        
            <div className='brand_block' onClick={e => this.props.resultsHandler(15)}>
                <img src='./images/biltwell-logo-new.png' className='logo_image' />
            </div>

            <div className='brand_block' onClick={e => this.props.resultsHandler(16)}>
                <img src='./images/bell-logo.png' className='logo_image' />
            </div>

            <div className='brand_block' onClick={e => this.props.resultsHandler(17)}>
                <img src='./images/shoei_logo.png' className='logo_image' />
            </div>

           

        </div>
    )
}
}

export default Brand_Menu;