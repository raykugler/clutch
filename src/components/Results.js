import React from 'react';
import Helmet_Sort from './Helmet_Sort';


class Results extends React.Component{
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
            onClick={this.props.colormenuOrResults}>...back</p>
            <Helmet_Sort 
            choice={this.props.choice} 
            />
            
            </div>
        )
    }
}

export default Results;