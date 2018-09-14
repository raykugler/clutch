import React from 'react';
import Single_Product from './Single_Product';
import Helmet_Table from'./Helmet_Table';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjleltmy3034u01ci6paiipda/master"
  });
class Helmet_Sort extends React.Component {
    constructor(props){
        super(props)
        this.state={
            singleitem: false,
            sku: 0,
        } 
    }
    back=()=>{
        this.setState({singleitem: false})
        console.log('test')
    }
    singleProduct=(id)=>{
        if(this.state.singleitem===false){
            this.setState({sku: id})
            this.setState({singleitem: true});
        console.log(this.state.singleitem);
     
        console.log(`single product ${id}`);

        console.log(`if helmet sort ${this.state.sku}`);
    }
    else{
    this.setState({singleitem: false});
    this.setState({sku: 0})
    console.log(`else helmet sort ${this.state.sku}`);
    console.log(this.state.singleitem);

    }       
    }



    render(props ){
        var items_show='';

        if (this.state.singleitem === false){
            console.log(`retern if ${this.props.sku}`)
            items_show= <div className='helmet_sort'> <Helmet_Table 
            choice={this.props.choice} 
            singleProduct={this.singleProduct} 
            sku={this.state.sku} 
            back={this.back}
            brand={this.props.brand}
             />
             </div>

        }
        else{
            console.log(`else return ${this.state.sku}`)
            items_show=
            <div className='single_page'>
            <Single_Product sku={this.state.sku} back={this.back}/>
           </div>
        }
        return(
            <ApolloProvider client={client}>
                
           {items_show} 
            
             </ApolloProvider>

        ) ; 
        
    }}

    export default Helmet_Sort;
   
//