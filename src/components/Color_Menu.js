import React from 'react';
class Color_Menu extends React.Component{
    constructor(props){
        super(props)
    }
  
     
render(){
    return(
        <div className='color_menu'>
        <div className='all_tab tab'  
        onClick={e => this.props.resultsHandler(9)} >
                    <p className='color_menu_text'>all</p>    
                </div>
            <div className='color_block row_one column_one' 
            onClick={e => this.props.resultsHandler(1)} >
                <p className='color_menu_text' >white</p>
                <div className='white_circle color_circle'></div>
            </div>
    
            <div className='color_block row_one column_two' 
            onClick={e => this.props.resultsHandler(2)} >
                <p className='color_menu_text'>black</p>
                <div className='black_circle color_circle'></div>
            </div>
        
            <div className='color_block column_one row_two' 
            onClick={e => this.props.resultsHandler(3)} >
                <div className='silver_circle color_circle'></div>
                <p className='color_menu_text'  >silver</p>
            </div>
        
            <div className='color_block column_two row_two' 
            onClick={e => this.props.resultsHandler(4)} > 
                <div className='red_circle color_circle'></div>        
                <p className='color_menu_text'>red</p>
            </div>

            <div className='color_block column_one row_three' 
            onClick={e => this.props.resultsHandler(5)} > 
                <div className='gold_circle color_circle'></div>
                <p className='color_menu_text '>gold</p>
            </div>

            <div className='color_block column_two row_three' 
            onClick={e => this.props.resultsHandler(6)} > 
                <div className='flat_black_circle color_circle'></div>
                <p className='color_menu_text' >flat black</p>
            </div>

            <div className='color_block column_one row_four' 
            onClick={e => this.props.resultsHandler(7)}> 
                <div className='blue_circle color_circle'></div>
                <p className='color_menu_text' >blue</p>
            </div>

            <div className='color_block column_two row_four' 
            onClick={e => this.props.resultsHandler(8)}> 
                <div className='orange_circle color_circle'></div>
                <p className='color_menu_text' >orange</p>
            </div>

        </div>
    )
}
}

export default Color_Menu;