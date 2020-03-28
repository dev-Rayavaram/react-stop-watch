/*
pseudocode
class button extends component
set default values
counter<-0
setTimerFlag<-false
this.state.buttonName <-name
this.state.handleEvent<-onButtonHandler
PROCEDURE onButtonHandler
    IF onButtonHandler.value equals Reset THEN
        setTimerFlag<-true
        call resetHandler
        update DOM element counter
    ELSE IF onButtonHandler.value equals SetTimer THEN
        setTimerFlag<-true
        call setTimerHandler
        update DOM element counter
 
    ELSE IF onButtonHandler.value equals Stop THEN
        setTimerFlag<-false
        call stopTimerHandler
        update DOM element counter
    END IF
END
PROCEDURE resetHandler
    counter<-0
    trigger EVENT SetTimer
END
PROCEDURE setTimerHandler
    call setTimeout 
    pass timer, timerNum
        Procedure timer
            WHILE setTimerFlag true THEN
                counter++
                DOM element<-counter
            END WHILE
END
PROCEDURE stopTimerHandler
    call removeTimeout
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
            value:1,
            
        }
        this.handleReset=this.handleReset.bind(this);
        this.handleTimer=this.handleTimer.bind(this);
        this.handleStop=this.handleStop.bind(this);

    }
    handleReset(){
        alert("inside Reset");
    }
    handleTimer(){
        
           this.timer = setInterval(() => this.setState({
            value: this.state.value+1
          }), 300);
        } 
    handleStop(){
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
                <button className='button' onClick={this.handleStop}>Stop
                </button>
            </div>
        </div>
      ) 
    }
  }
  
export default ParentButton;
