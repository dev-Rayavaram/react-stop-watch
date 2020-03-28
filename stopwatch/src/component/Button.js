/*
pseudocode
class button extends component
set default values
counter<-0
initialise buttons and bind methods handleReset,handleTimer and handleStop
PROCEDURE handleReset
    counter<-0
    trigger EVENT SetTimer
END
PROCEDURE setTimerHandler
    call setInterval 
        Procedure timer
            WHILE setTimerFlag true THEN
                counter++
                DOM element<-counter
            END WHILE
END
PROCEDURE stopTimerHandler
    call clearTimer
    counter<-0
    DOM element<-counter
END PROCEDURE
END Class
Export button 
*/


import React ,{Component} from 'react';
class ParentButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:0,
            timerFlag:false
            
        }
        this.handleReset=this.handleReset.bind(this);
        this.handleTimer=this.handleTimer.bind(this);
        this.handlePause=this.handlePause.bind(this);

    }
    handleReset(){
          clearInterval(this.timer);
          this.setState({
            value: 0
          });
          this.setState({
            timerFlag: true
          });
        }
    handleTimer(){
        console.log('this.timer',this.timer);
        if(this.timer){
            clearInterval(this.timer);
            this.timer = setInterval(() => this.setState({
              value: this.state.value+1
            }), 300);
        }else{
            this.timer = setInterval(() => this.setState({
                value: this.state.value+1
              }), 300);  
                this.setState({
                timerFlag: true
              });
            }
        
        } 
    handlePause(){
        clearInterval(this.timer);
    }  
    render() {
     
      return(
        <div className='card'>            
            <div  className='input'>
                <p id='counter'><h3>Counter:{this.state.value}</h3></p>
            </div>
            <div className='input'>
                <button className='button' onClick={this.handleReset}>Reset
                </button>
             </div>
            <div className='input'>
                <button className='button' onClick={this.handleTimer}>Timer
                  </button>
             </div>
            <div className='input'>
                <button className='button' onClick={this.handlePause}>Pause
                </button>
            </div>
        </div>
      ) 
    }
  }
  
export default ParentButton;
