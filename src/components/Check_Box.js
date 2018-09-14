import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';


class Check_Box extends React.Component{
    constructor(props){
        super(props)
    }

componentDidMount=(props)=>{

        console.log(`check box ${this.props.colorChoice}`);
        console.log(`check box ${this.props.type34}`)
    }
    

 
render(clutches){
    
    return(
        <div >
        <button type="button" value="silver" id='silver' onClick={this.props.silver}>Silver</button>
        <button type="button" value="black" id='black' onClick={this.props.black}>Black</button>
        <button type="button" value="black" id='black' onClick={this.props.threeQuarter}>3/4</button>
        </div>      
        
    )
}

}

export default Check_Box;


/*  
        */