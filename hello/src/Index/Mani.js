import React, { Component } from 'react'
import './Stylesheet.css'

export class Mani extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'firstname',
             lastname:'lastname',
             email:'email',
             password:'password',
             confirmPassword:'confirmPassword',
             message:'Thank you'
        }
    }
    firstnameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    lastnameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    emailChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    passwordChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    confirmPasswordChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    submit=event=>{
        document.write("THANK  YOU  FOR  APPLYING  FORM")
    }   

    
    
     
    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="primary">
                    <div className="sm">
                   <input type="text" 
                   placeholder={this.state.firstname}
                   onChange={this.firstnameChange}/>
                   </div>
                
                <div className="sm">
                   <input type="text" 
                   placeholder={this.state.lastname}
                   onChange={this.lastnameChange}/>
                </div>
                <div className="sm">
                   <input type="text" 
                   placeholder={this.state.email}
                   onChange={this.emailChange}/>
                </div>
                <div className="sm">
                   <input type="password" 
                   placeholder={this.state.password}
                   onChange={this.passwordChange}/>
                </div>
                <div className="sm">
                   <input type="confirmpassword" 
                   placeholder={this.state.confirmPassword}
                   onChange={this.confirmPasswordChange}/>
                </div>
                
                <div className="manu">
                   male:  
                   <input type="radio" name="gender" value=""/>
                   <br />
                female:
                    <input type="radio" name="gender" value=""/>
                </div>  
                
                    <button type="submit">Submit</button> </div>   
                  
                

            </form>
        )
    }
}

export default Mani
