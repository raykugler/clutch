import React from 'react';


class Footer_Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            findus: false,
            aboutus: false,
            customer: false,
            newsletter: false,
        }
    }
findusToggle=()=>{
    if(this.state.findus === false){
    this.setState({ findus: true})
    }
    else{
        this.setState({findus: false})
    }
}
aboutusToggle=()=>{
    if(this.state.aboutus === false){
    this.setState({ aboutus: true})
    }
    else{
        this.setState({aboutus: false})
    }
}
customerToggle=()=>{
    if(this.state.customer === false){
    this.setState({ customer: true})
    }
    else{
        this.setState({customer: false})
    }
}
newsletterToggle=()=>{
    if(this.state.newsletter === false){
    this.setState({ newsletter: true})
    }
    else{
        this.setState({newsletter: false})
    }
}


    render(){
        return(
        <div className='footer_menu'>
            <div className={(this.state.findus ? 'wide_blue_box find_us' : 'blue_box find_us')} 
            onClick={this.findusToggle}>
                <p className='footer_text'>find a store</p>
                <p className={(this.state.findus ? 'address_one' : 'address_one_hide')}>
                This is an address.<br/>
                City, State Zipcode<br/>
                Phone Number 
                </p>
                <p className={(this.state.findus ? 'address_two' : 'address_one_hide')}>
                This is an address.<br/>
                City, State Zipcode<br/>
                Phone Number 
                </p>
                <img src='.\images\arrow.png' className={(this.state.findus ? 'wide_footer_arrow' : 'footer_arrow')} />
            </div>
            
            <div className={(this.state.aboutus ? 'wide_blue_box about_us' : 'blue_box about_us')}
            onClick={this.aboutusToggle}>
                <p className={(this.state.aboutus ? 'about_us_text' : 'about_us_hide')}>
                Clutch is not a real company but Ray Kugler is a real front-end developer. You can find him at raykugler.com.
                </p>
                <p className='footer_text'>about_us</p>
                <img src='.\images\arrow.png' className={(this.state.aboutus ? 'wide_footer_arrow' : 'footer_arrow')}/>
            </div>

            <div className={(this.state.customer ? 'wide_blue_box customer_service' : 'blue_box customer_service')} 
            onClick={this.customerToggle}>
                <p className={(this.state.customer ? 'customer_service_text' : 'customer_hide')}>
                Call customer service... <br/>
                Email customer service...</p>
                <p className='footer_text'>customer service</p>
                <img src='.\images\arrow.png' className='footer_arrow' className={(this.state.customer ? 'wide_footer_arrow' : 'footer_arrow')}/>
            </div>

            <div className={(this.state.newsletter ? 'wide_blue_box newsletter' : 'blue_box newsletter')}
            onClick={this.newsletterToggle}>
                <p className={(this.state.newsletter ? 'newsletter_text' : 'newsletter_hide')}>
                Subscribe to the Clutch newsletter!</p>
                <p className='footer_text'>newsletter</p>
                <img src='.\images\arrow.png' className={(this.state.newsletter ? 'wide_footer_arrow' : 'footer_arrow')}/>
            </div>










            <div className={(this.state.newsletter ? 'socme_low' : 'socme_icons')}>
            <img src='.\images\fb_icon.png' className='icon fb_icon' />
            <img src='.\images\twitter_icon.png' className='icon twitter_icon'/>
            <img src='.\images\ig_icon.png' className='icon ig_icon'/>
            <img src='.\images\snap_icon.png' className='icon snap_icon'/>
            <img src='.\images\youtube_icon.png' className='icon youtube_icon'/>
            </div>
            <div className='footer_orange_box'></div>
            <div className= 'footer_green_box'> </div>
            <div className='connect_cover'>
            <p className='connect_text'> connect</p>
            </div>
        </div>

        )}}
export default Footer_Menu;