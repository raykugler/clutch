import React from 'react';
import Brand_Results from './Brand_Results';
import Big_Brand_Menu from './Big_Brand_Menu';

class Brand_Menu_Or_Results extends React.Component{
    constructor(props){
        super(props)
        this.state={
            choice: 0, 
            typeChoice: 0,
            branddisplay:'menu',
            all: 'all',
            brand:''
        }
    }
componentDidMount(){
    console.log(this.state.brand);
}
bigBrandBack=()=>{
    this.setState({branddisplay: 'menu'})
}
  
biltwellbrandChoice=()=>{
        this.setState({brand: 'biltwell'})
        this.setState({branddisplay: 'results'})
 
        console.log(`brand menu or results ${this.state.brand}`);
    }
    bellbrandChoice=(e)=>{
        this.setState({brand: 'bell'})
        this.setState({branddisplay: 'results'})
 
        console.log(`brand menu or results ${this.state.brand}`);
    }
shoeibrandChoice=(e)=>{
        this.setState({brand: 'shoei'})
        this.setState({branddisplay: 'results'})
 
        console.log(`brand menu or results ${this.state.brand}`);
    }
  

  
    render(){
        var brand_menu_results = <p>bbbbbb</p>
            if(this.state.branddisplay === 'menu'){
                brand_menu_results = <Big_Brand_Menu 
                bellbrandChoice={this.bellbrandChoice}
                biltwellbrandChoice={this.biltwellbrandChoice}
                shoeibrandChoice={this.shoeibrandChoice}
                brand={this.state.brand}
                bigBrandBack={this.bigBrandBack}/>                
               
            }
            else if(this.state.branddisplay === 'results'){
                brand_menu_results = <Brand_Results 
                brand={this.state.brand}
                bigBrandBack={this.bigBrandBack}
                />
            }
        return(
            <div className='menu_or_results'>
            {brand_menu_results}
            </div>
        )
    
    
    
    }}

export default Brand_Menu_Or_Results;

 /*if(this.state.display === 'colormenu'){
            menu_results = <Color_Menu
                
                colorChoice={this.state.colorChoice} />
            }
            else if(this.state.display === 'typemenu'){
                menu_results = <Type_Menu 
              />}
        else if(this.state.display === 'results'){
                menu_results = <Results 
                colorHandler={this.colorHandler}
                colorChoice={this.state.colorChoice} />
        }*/