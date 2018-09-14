import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';




class Single_Product extends React.Component {
    constructor(props){
        super(props)
        this.state={skustate: this.props.sku}
}


shopAlert=()=>{
    alert('This is a demo site.');
}
   
    render(clutches){
        
        
        return(

        <Query query={Q_Helmet} variable={{clutches}}  >

        {({loading, error, data}) =>{
            if (loading) return <div>Loading...</div>
           if (error) return <div>Error:</div>
          
           return data.clutches.filter(clutch => clutch.sku === this.state.skustate).map(({ price, sku, size, primaryimage, longdescription, helmetType, handle, description, image, brand, name, id,color, helmetColors }) => (
            <div className='single_item_block'  key={sku}>
                <div className='photo_block' >
                    <div className='photo_list' key={id + 3}>
                        <div key={id + 2}  className='image_holder_one'>
                            <img key={primaryimage.handle} className='helmet_menu_image_one'  src={`${primaryimage.url}`} />
                        </div>
                        <div key={id + 1}  className='image_holder_two'>
                            <img key={image.handle} className='helmet_menu_image_two'   src={`${image[1].url}`} />
                        </div>
                        <div key={id +14}  className='image_holder_three' >
                            <img key={image.handle} className='helmet_menu_image_three'   src={`${image[2].url}`} />
                        </div>
                        <div key={id + 13}  className='image_holder_four'>
                            <img key={image.handle}  className='helmet_menu_image_four' src={`${image[3].url}`} />
                        </div>
                      
                    </div>
                    
                </div>
                
                <div className='single_details'>
                    <div className='single_helmet_price' key={sku} onClick={this.shopAlert}>${price} <img src='.\images\baseline_shopping_cart_black_18dp.png' className='single_cart'/></div>
                    <div className='single_helmet_brand' key={sku + 200}>{brand}</div>
                    <div className='single_helmet_name' key={sku + 203}>{name}</div>
                    <div className='single_long_description' key={sku + 802}>{longdescription}</div>
                    
                
                    </div>
                    <div className='return_button' onClick={this.props.back}> back to results...</div>
            </div>
        ) ); 
        
    }}
   
    </Query>         
    )}}

export default Single_Product;


//