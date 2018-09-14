import React from 'react';
import Helmet_Sort from './Helmet_Sort';
import Biltwell_Helmet_List from './Biltwell_Helmet_List';
import Bell_Helmet_List from './Bell_Helmet_List';
import Shoei_Helmet_List from './Shoei_Helmet_List';


class Brand_Results extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(`Results colorchoice is ${this.props.choice}`);
        
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