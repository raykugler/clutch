import React from 'react';
import Helmet_Sort from './Helmet_Sort';


class Brand_Results extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(props){
        
        return(
            <div className='results'>
            <p className='back_button' 
            onClick={this.props.bigBrandBack}>...back</p>
            <Helmet_Sort brand={this.props.brand}
            />            
            </div>
        )
    }
}

export default Brand_Results;