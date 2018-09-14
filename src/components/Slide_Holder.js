import React from 'react';
import Slideshow from './Slide_Show';


class Slide_Holder extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
    

<div className='slide_holder'>
            <Slideshow />
</div>

        )}}

export default Slide_Holder;