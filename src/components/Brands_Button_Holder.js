import React from 'react';
import Modal from '..\..\src/react-responsive-modal/';
import Brand_Shop_Menu from './Brand_Shop_Menu';

class Brands_Button_Holder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
          }
    }
    onOpenModal = (event) => {
        this.setState({ open: true });
      };
    
      onCloseModal = (event) => {
        this.setState({ open: false });
 
      };
    render(){
        return(




            <div className='brands_button_holder'>
            <Modal open={this.state.open} onClose={this.onCloseModal}  center>
              <Brand_Shop_Menu/>
            </Modal>
            <img src='.\images\button_image_two.png' 
            className='button_image_one' 
            open={this.state.open} 
            onClick={this.onOpenModal}  
            onClose={this.onCloseModal}/>
            <p className='brands_button_text'>brands</p>
            </div>
        )}}

export default Brands_Button_Holder