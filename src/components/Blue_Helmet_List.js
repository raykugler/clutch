import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';
import Helmet_Sort from './Helmet_Sort';
import Check_Box from './Check_Box';
class Blue_Helmet_List extends React.Component {
    constructor(props){
        super(props)
        this.state={bluestate: 'blue'
    }
}
    componentDidMount(){
        console.log(`Helemt List silverstate is ${this.props.silverstate}`);
        console.log(`Helemt List blackstate is ${this.props.blackstate}`);
    }
   
    render(clutches){
        
        return(

        <Query query={Q_Helmet} variable={{clutches}}  >
        {({loading, error, data}) =>{
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
          
           return data.clutches.filter(clutch => clutch[this.state.bluestate]
        ).map(({ price, sku, size, helmetType, description, image, brand, name, id,color, primaryimage, helmetColors }) => (
            <ul className='shop_block' onClick={r =>this.props.singleProduct(sku)}>
                <li key={id} >
                    {<img key={image.id} className='helmet_menu_image' src={`${primaryimage.url}`} />}

                </li>
                <li className='helmet_description'>{description}</li>
                <li className='helmet_price'>${price}</li>
                <li className='helmet_brand'>{brand}</li>
                <li className='helmet_name'>{name}</li>
            </ul>
        ) ); 
        
    }}
   
    </Query>         
    )}}

export default Blue_Helmet_List;


//