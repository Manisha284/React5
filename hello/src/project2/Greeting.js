import React, { Component } from 'react'
import './stylesheet.css'
class Greeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Time:new Date().toLocaleTimeString()

        }
    }
    componentDidMount(){
        setInterval(()=>
        {
            this.setState({
                Time:new Date().toLocaleTimeString()

            })
        },1000)
    }
    
    render() {
       let curDate=new Date();
       curDate=curDate.getHours();
        return (
            
            <div className="Manu">
               <h1>{this.state.Time}</h1>
               {curDate>=12?curDate>=17?curDate>=20?
               <div>
                   <h1 className="Mani">Hello,Good Night</h1>
                   <p>"Before going to sleep every night, forgive everyone, and sleep with a good heart"</p>
                </div>:
                <div>
                    <h1 className="Mani">Hello,Good Evening</h1>
                    <p>"Evenings allow you to forget the bitter worries of the day and get ready for the sweet dreams of night"</p>
                </div>:
                <div>
                    <h1 className="Mani">Hello,Good Afternoon</h1>
                    <p>"Hope You're having a lovely day!enjoy the rest of it!"</p>
                </div>:
               <div>
                   <h1 className="Mani">Hello,Good Morning</h1>
                   <p>"Good morning, make positive thoughts and enjoy every moment of this day!"</p>
                </div>}
            </div>
        
        )
    }
}

export default Greeting
