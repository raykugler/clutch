
import React from 'react';

import Modal from 'react-responsive-modal';
import Shop_Menu from './Shop_Menu';



class Styles_Button_Holder extends React.Component{
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
   

    render(props){
        return(
            
            <div className='styles_button_holder'  >
            <Modal open={this.state.open} onClose={this.onCloseModal}  center>
              <Shop_Menu silver={this.props.silver} silverstate={this.props.silverstate}/>
            </Modal>
        
            <img src='.\images\button_image_one.png' className='button_image_one'  open={this.state.open} onClick={this.onOpenModal}  onClose={this.onCloseModal} open={this.state.open}/>
            <p className='styles_button_text' open={this.state.open} onClick={this.onOpenModal}  onClose={this.onCloseModal} open={this.state.open}>styles</p>
            
            </div>

        )}}
export default Styles_Button_Holder