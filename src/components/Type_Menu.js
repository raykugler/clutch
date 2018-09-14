import React from 'react';

class Type_Menu extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
        <div className='type_menu'>
            <div className='helmet_block three_quarter' onClick={e => this.props.resultsHandler(13)}>
            <img src='./images/threequarter.png' className='helmet_type_image' />
            <p className='type_descr_text'>three-quarter</p>
        </div>

        <div className='helmet_block fullface' onClick={e => this.props.resultsHandler(12)}>
            <img src='./images/fullface.png' className='helmet_type_image' />
            <p className='type_descr_text'>full face</p>
        </div>

        <div className='helmet_block modular' onClick={e => this.props.resultsHandler(11)}>
            <img src='./images/modular.png' className='helmet_type_image' />
            <p className='type_descr_text'>modular</p>
        </div>
       
        <div className='helmet_block half' onClick={e => this.props.resultsHandler(14)}>
            <img src='./images/half.png' className='helmet_type_image' />
            <p className='type_descr_text'>half</p>
        </div>
        
        
        </div>
    )
}
}

export default Type_Menu;