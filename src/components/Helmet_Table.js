import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Black_Helmet_List from './Black_Helmet_List';

import White_Helmet_List from './White_Helmet_List';
import Silver_Helmet_List from './Silver_Helmet_List';
import Gold_Helmet_List from './Gold_Helmet_List';
import Flat_Black_Helmet_List from './Flat_Black_Helmet_List';
import Blue_Helmet_List from './Blue_Helmet_List';
import Orange_Helmet_List from './Orange_Helmet_List';
import Red_Helmet_List from './Red_Helmet_List';
import All_Helmet_List from './All_Helmet_List';
import Modular_Helmet_List from './Modular_Helmet_List';
import Three_Quarter_Helmet_List from './Three_Quarter_Helmet_List';
import Full_Face_Helmet_List from './Full_Face_Helmet_List';
import Half_Helmet_List from './Half_Helmet_List';
import Bell_Helmet_List from './Bell_Helmet_List';
import Shoei_Helmet_List from './Shoei_Helmet_List';
import Biltwell_Helmet_List from './Biltwell_Helmet_List';


const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjleltmy3034u01ci6paiipda/master"
  });

  class Helmet_Table extends React.Component {
    constructor(props){
        super(props)  
    }
  
    render(props){
        var choice_list ='';
        if(this.props.choice === 1){
            choice_list = <White_Helmet_List 
                        singleProduct={this.props.singleProduct} 
                        id={this.props.id}
                        back={this.props.back} />
        }
        else if(this.props.choice === 2){
            choice_list = <Black_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 3){
            choice_list = <Silver_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 4){
            choice_list = <Red_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 5){
            choice_list = <Gold_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 6){
            choice_list = <Flat_Black_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 7){
            choice_list = <Blue_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 8){
            choice_list = <Orange_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 9){
            choice_list = <All_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 10){
            choice_list = <All_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 11){
            choice_list = <Modular_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 12){
            choice_list = <Full_Face_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 13){
            choice_list = <Three_Quarter_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }
        else if(this.props.choice === 14){
            choice_list = <Half_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }

        else if(this.props.choice === 15 || this.props.brand === 'biltwell'){
            choice_list = <Biltwell_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }

        else if(this.props.choice === 17 || this.props.brand === 'shoei'){
            choice_list = <Shoei_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>
        }
        else if(this.props.choice === 16 || this.props.brand === 'bell'){
            choice_list = <Bell_Helmet_List 
            singleProduct={this.props.singleProduct} 
            id={this.props.id}
            back={this.props.back}/>

        }

    return(
    <ApolloProvider client={client}>  
        <div className='helmet_page'>
            <ul className='helmet_table'>
                
                        {choice_list}
                     </ul>
        </div>
    </ApolloProvider>
);

}};

export default Helmet_Table;