import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';
class Half_Helmet_List extends React.Component {
    constructor(props){
        super(props)
        this.state={halfstate: 'half'
    }
}
    
    render(clutches){
        
        return(

        <Query query={Q_Helmet} variable={{clutches}}  >
        {({loading, error, data}) =>{
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
          
           return data.clutches.filter(clutch => clutch[this.state.halfstate]
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

export default Half_Helmet_List;


//