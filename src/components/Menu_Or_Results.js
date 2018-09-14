import React from 'react';
import Results from './Results';
import Menu_Choice from './Menu_Choice';


class Menu_Or_Results extends React.Component{
    constructor(props){
        super(props)
        this.state={
            choice: 0, 
            typeChoice: 0,
            display:'menu',
            all: 'all',
        }
    }

    
    resultsHandler = (e) => {
        this.setState({choice: e});
        this.setState({display: 'results'});
   
    }  
    resultstypeHandler = (e) => {
        this.setState({choice: e});
        this.setState({display: 'results'});
    }  

colormenuOrResults =() => {
    if(this.state.display === 'colormenu'){
    this.setState({display: 'results'})
    }
    else{
        this.setState({display: 'menu'})
    }
}

typemenuOrResults =() => {
    if(this.state.display === 'typemenu'){
    this.setState({display: 'results'})
    }
    else{
        this.setState({display: 'typemenu'})
    }
}
  
    render(){
        var menu_results = <p>LLLLLL</p>
            if(this.state.display === 'menu'){
                menu_results = <Menu_Choice 
                resultsHandler={this.resultsHandler}
                handleTypeMenuClick={this.props.handleTypeMenuClick}
                handleColorMenuClick={this.props.handleColorMenuClick}
                handleBrandMenuClick={this.props.handleBrandMenuClick}
                handleBigBrandMenuClick={this.props.handleBigBrandMenuClick}
                display={this.state.display} 
                menu={this.props.menu} 
                choice={this.state.choice}
                menuToggle={this.menuToggle} />
                
            }
            else if(this.state.display === 'results'){
                menu_results = <Results 
                resultsHandler={this.resultsHandler}
                handleTypeMenuClick={this.props.handleTypeMenuClick}
                handleColorMenuClick={this.props.handleColorMenuClick}
                handleBigBrandMenuClick={this.props.handleBigBrandMenuClick}
                display={this.state.display} 
                menu={this.props.menu} 
                choice={this.state.choice} 
                menuToggle={this.menuToggle} 
                colormenuOrResults={this.colormenuOrResults}/>
            }
        return(
            <div className='menu_or_results'>
            {menu_results}
            </div>
        )
    
    
    
    }}

export default Menu_Or_Results;

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