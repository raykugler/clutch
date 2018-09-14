import React from 'react';
import { client } from './Helmet_Table'
import Helmet_Sort from './Helmet_Sort';

import Q_Helmet from './Q_Helmet';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';




const str = JSON.stringify(Q_Helmet);

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            blackstate: '',
            silverstate: '',
            size: 'sizeLarge',
            type34: ''   
            }
    }

    silver =() => {
        if(this.state.silverstate === ''){
        this.setState({silverstate: 'silver'});
        this.setState({type34: ''});
        this.setState({blackstate: ''});

        console.log('nope')
        }
        else{
            this.setState({silverstate: ''})
            console.log('yep')
        }
          } 

    black =() => {
        if(this.state.blackstate === ''){
        this.setState({blackstate: 'black'});
        this.setState({type34: ''});
        this.setState({silverstate: ''});
        console.log('nope')
        }
        else{
            this.setState({blackstate: ''})
            console.log('yep')
        }
            } 

    threeQuarter = () => {
        if(this.state.type34 === ''){
        this.setState({type34: 'type34'});
        this.setState({blackstate: ''});
        this.setState({silverstate: ''});
        console.log('nope')
        }
        else{
            this.setState({type34: ''})
            console.log('yep')
        }
            }          
    componentDidMount=(client)=>{
        console.log(`main ${this.state.type34}`);
        console.log(`main ${this.state.silverstate}`);
        console.log(`main ${this.state.type}`);
    }
    
    render(){
        return(
            <div>
            <Helmet_Sort 
            type34={this.state.type34} 
            threeQuarter={this.threeQuarter} 
            blackstate={this.state.blackstate} 
            silverstate={this.state.silverstate} 
            silver={this.silver} 
            black={this.black} />
            </div>
        )
    }
}

export default Main;