import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';


class All_Helmet_List extends React.Component {
    constructor(props){
        super(props)
}
   
    render(clutches){
        
        return(

        <Query query={Q_Helmet} variable={{clutches}}  >
        {({loading, error, data}) =>{
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
          
           return data.clutches.map(({ price, sku, size, helmetType, description, image, brand, name, id,color, helmetColors }) => (
            <ul className='shop_block' onClick={this.props.singleProduct}>
                <li key={id} >
                    {<img key={image.id} className='helmet_menu_image' src={`${image[0].url}`} />}

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

export default All_Helmet_List;


//