import React from 'react';


class Atmos_Button_Holder extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
<div className='atmos_button_holder' >
<img src='.\images\atmos_button_left.png' className='atmos_button_left'/>
<img src='.\images\atmos_button_right.png' className='atmos_button_right'/>

<p className='atmos_button_text'>ray kugler</p>
</div>

        )}}

export default Atmos_Button_Holder;
