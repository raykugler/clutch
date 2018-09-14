import React from 'react';
import Slide_Holder from './Slide_Holder';
import Styles_Button_Holder from './Styles_Button_Holder';
import Brands_Button_Holder from './Brands_Button_Holder';
import Atmos_Button_Holder from './Atmos_Button_Holder';
import Box_Frame from './Box_Frame';
import Footer_Menu from './Footer_Menu';
import Bottom_Box_Frame from './Bottom_Box_Frame';
import Top_Bar from './Top_Bar';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';



class Clutch extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    render(props){
        return(
            <div className='main'>
            <Top_Bar />
          
            <Box_Frame />
            <Slide_Holder />
            <Styles_Button_Holder onCloseModal={this.props.onCloseModal} open={this.props.open} onOpenModal={this.props.onOpenModal}/>
           
                      
            <Brands_Button_Holder />
           
            <Atmos_Button_Holder  />
            <Footer_Menu />
            <Bottom_Box_Frame />
           
           <div className='temp_bottom_filler'> </div>
            </div>
        )
    }
}
export default Clutch;