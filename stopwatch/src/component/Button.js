/*
pseudocode
class button extends component
set default values
counter<-0
timerToggleFlag<-true
initialise buttons and bind methods handleReset,handleTimer and handleStop
PROCEDURE handleReset
    counter<-0
    clear the timer
END
PROCEDURE setTimerHandler
    IF timer exists THEN
        clear timer
        restart the timer // if we dont clear existing timer and start a new timer,pause and reset are not responding
        increase counter by 1
    ELSE
        start timer
        increase counter by 1
END
PROCEDURE pauseTimerHandler
    IF timerToggleFlag is true THEN
        clear timer
        set timerToggleFlag to false
    ELSE
        start timer
        increase counter by 1
        set timerToggleFlag to true
END PROCEDURE
END Class
Export button 
*/


import React  from 'react';
class ParentButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:0,
            timerToggleFlag:0
         }
         this.timer =[];
        this.handleReset=this.handleReset.bind(this);
        this.handleTimer=this.handleTimer.bind(this);
        this.handlePause=this.handlePause.bind(this);

    }
    componentWillUnmount() {
        this.timer =[];
    }
    handleReset(){
        for(let i=0;i<this.timer.length;i++){
            console.log("this.timer[i]",this.timer[i]);
            clearInterval(this.timer[i]);
        }
          this.setState({
            value: 0
          });
          
        }
    handleTimer(){
        console.log('this.timer',this.timer);
        if(this.timer.length>0){
            //clears timer if exists and adds timer
            for(let i=0;i<this.timer.length;i++){
                clearInterval(this.timer[i]);
            }
            this.timer.push(setInterval(() => this.setState({
              value: this.state.value+1
            }), 300));
        }else{
            //adds timer
            let timerObj = setInterval(() => this.setState({
                value: this.state.value+1
              }), 300);
            this.timer.push(timerObj);  
            }
        
        }

    handlePause(){
        //toggles timer functionality
        console.log("handlePause",this.state.timerToggleFlag);
        if(this.state.timerToggleFlag%2===0){
            console.log('inside pause true');
            for(let i=0;i<this.timer.length;i++){
                clearInterval(this.timer[i]);
            }
            this.setState({
                timerToggleFlag: this.state.timerToggleFlag+1
              });            
        }else{
                console.log('inside pause false',this.state.timerToggleFlag);
                this.timer.push(setInterval(() => this.setState({
                value: this.state.value+1
              }), 300));
              this.setState({
                timerToggleFlag: this.state.timerToggleFlag+1
              });              
        }
    }  
    render() {
     
      return(
        <div className='card'>            
            <div  className='input'>
                <span id='counter'><h3>Counter:{this.state.value}</h3></span>
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
