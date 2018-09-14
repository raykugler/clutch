import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';
class White_Helmet_List extends React.Component {
    constructor(props){
        super(props)
        this.state={whitestate: 'white'
    }
}

    render(clutches){
        
        return(

        <Query query={Q_Helmet} variable={{clutches}}  >
        {({loading, error, data}) =>{
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
          
           return data.clutches.filter(clutch => clutch[this.state.whitestate]
        ).map(({ price, sku, size, helmetType, handle, description, image, brand, primaryimage, name, id,color, helmetColors }) => (
            <ul className='shop_block' onClick={r =>this.props.singleProduct(sku)} key={sku+ 504}>
                <li key={id} >
                    {<img key={id} id={sku} className='helmet_menu_image' src={`${primaryimage.url}`} />}

                </li>
                <li className='helmet_description' key={sku + 204}>{description}</li>
                <li className='helmet_price' key={sku}>${price}</li>
                <li className='helmet_brand' key={sku + 200}>{brand}</li>
                <li className='helmet_name' key={sku + 203}>{name}</li>
            </ul>
        ) ); 
        
    }}
   
    </Query>         
    )}}

export default White_Helmet_List;


//