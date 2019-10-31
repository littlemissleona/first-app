import React from 'react';
import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';
import fifth from './images/5.jpg';
import sixth from './images/6.jpg';

import Card from './Card';

import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className = "App">
                <div>
                    <h3>News Headlines > </h3>
                    <div>
                        <Card 
                            pic = {first} 
                            text = "Brexit: Government pauses £100m 31 October ad campaign" 
                            topic = "UK POLITICS"                
                        />
                        <Card 
                            pic = {second} 
                            text = "Blowing whistle on dirty money 'wrecked my life" 
                            topic = "BUSINESS" 
                        />
                        <Card 
                            pic = {third} 
                            text = "Essex lorry deaths: Maurice Robinson in court on manslaughter charges" 
                            topic = "ESSEX" 
                        />
                    </div>
                </div>

                <div>
                    <h3>Sports Headlines > </h3> 
                    <div>
                    <Card 
                        pic={fourth} 
                        text="Man City v Southampton: Saints 'incredible professionals'" 
                        topic="FOOTBALL"
                    />
                    <Card 
                        pic={fifth} 
                        text="Rugby World Cup final: England's Eddie Jones responds to Warren Gatland remark" 
                        topic="RUGBY"
                    
                    />
                    <Card 
                        pic={sixth} 
                        text="Nigel Benn comeback fight off due to shoulder injury" 
                        topic="BOXING"
                    
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
