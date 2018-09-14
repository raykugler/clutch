import gql from 'graphql-tag';

const Q_Helmet =  gql`

    {
  clutches {
    black
    silver
    white
    gold
    red
    flatblack
    blue
    orange
    pink
    purple
    price
    sku
    sizeLarge
    sizeSmall
    sizeXLarge
    sizeMedium
    typeFullFace
    type34
    modular
    half
    longdescription
    description
    id 
    brand
    bell
    shoei
    biltwell
    name
    primaryimage{
      id
      url
      handle
    
    }
    image {
      id
      url
      handle
    }
  }
}

`;


export default Q_Helmet;
