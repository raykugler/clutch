import React from 'react';
import { Query } from 'react-apollo';
import Q_Helmet from './Q_Helmet';
import Helmet_Sort from './Helmet_Sort';
import Check_Box from './Check_Box';
class Helmet_List extends React.Component {
    constructor(props){
        super(props)
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
          
           return data.clutches.filter(clutch => clutch[this.props.blackstate] || 
                                                 clutch[this.props.silverstate] || 
                                                 clutch[this.props.whitestate] ||
                                                 clutch[this.props.redstate] ||
                                                 clutch[this.props.goldstate] ||
                                                 clutch[this.props.flatblackstate] ||
                                                 clutch[this.props.bluestate] ||
                                                 clutch[this.props.orangestate] ||
                                                 clutch[this.props.pinkstate] ||
                                                 clutch[this.props.purplestate] || 
                                                 clutch[this.props.typeFullFace] ||
                                                 clutch[this.props.modular] ||
                                                 clutch[this.props.half] ||
                                    clutch[this.props.type34]).map(({ price, sku, size, helmetType, description, image, brand, name, id,color, helmetColors }) => (
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

export default Helmet_List;


//