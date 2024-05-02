
import { useState, Fragment } from 'react';
import './index.css';
// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];
// const personName = [
//   {name:'Ali'},
//   {name:'Kaif'},
//   {name:'Saif'},
// ];
function App() {
  let [stepsNumber,setStepsNumber] = useState(1);
  let [stepsCounterNumber,setCounterNumber] = useState(0);
  let [dateNumber,setDateNumber] = useState(new Date().getDate());
  // console.log(dateNumber)
  function handleStepsDecrement(){
    setStepsNumber((isSteps)=>isSteps - 1);
  }
  function handleStepsIncrement(){
    setStepsNumber((isSteps)=>isSteps + 1);
    console.log(stepsNumber)
  }
  function handleCounterDecrement(){
    setCounterNumber(stepsCounterNumber - stepsNumber);
  }
  function handleCounterIncrement(){
    setCounterNumber(stepsCounterNumber + stepsNumber);
    console.log(stepsCounterNumber)
    setDateNumber(stepsCounterNumber)
  }
  // let [steps,setSteps] = useState(1);
  // let [previoussteps,setPrevioussteps] = useState(3)
  // let [isOpen,setisOpen] = useState(true)
  // function handlePrevious(){
  //   if(steps > 1) {
  //     setSteps((currentSteps)=>currentSteps - 1);
  //     setPrevioussteps(previoussteps+1);
  //   }

  // }
  // function handleNext(){
  //   if(steps < 3){
  //     setSteps((currentSteps)=>currentSteps + 1);
  //     setPrevioussteps(previoussteps-1);
  //   }
  // }
  // function handleClose(){
  //   setisOpen(!isOpen)
  // }
  const date = new Date();
  const showTime = date.getDay() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
  return (
    <Fragment>
      <div className="stepsNumber">
        <button className="stepsCounter" onClick={handleStepsDecrement}>-</button>
        <p>Steps {stepsNumber}</p>
        <button className="stepsCounter" onClick={handleStepsIncrement}>+</button>
      </div>
      <div className="counterNumber">
        <button className="counterCounter"  onClick={handleCounterDecrement}>-</button>
        <p>Counter {stepsCounterNumber}</p>
        <button className="counterCounter"  onClick={handleCounterIncrement}>+</button>
      </div>


     <p className='date_wrapper'> {showTime}</p>
      {/* <button className='close_button' onClick={handleClose}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <div className="steps">
        <div className="numbers">
          <div className={steps >= 1 ? "active" : ""}>1</div>
          <div className={steps >= 2 ? "active" : ""}>2</div>
          <div className={steps >= 3 ? "active" : ""}>3</div>
        </div>
        <p className='message'>{
        messages[steps-1]
        }</p>
        <p className='message'>{
        personName[previoussteps-1].name
        }</p>
        <div className="buttons">
          <button style={{color: '#fff', backgroundColor: "Purple"}} onClick={handlePrevious}>Previous</button>
          <button style={{color: '#fff', backgroundColor: "Purple"}} onClick={handleNext}>Next</button>
        </div>
      </div>} */}
    </Fragment>

  );
}

export default App;
