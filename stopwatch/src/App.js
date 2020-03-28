
import React from 'react';
import ParentButton from './component/Button.js'

import './App.css';
/**
 * import button
 * 
 */
function App() {
  return (
     /*
      Instantiate button1
        button1 value<-Reset
        button on click <- call onButtonHandler
      Instantiate button2
        button2 value<-SetTimer
        button2 on click<- call onButtonHandler  
      Instantiate button3
        button3 value<-Stop
        button3 on click<- call onButtonHandler 
    */

    <React.Fragment>

      <div className="App">
        <ParentButton/>
      </div>


    </React.Fragment>  
   
  );
}

export default App;