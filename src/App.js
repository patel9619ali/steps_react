
import { useState, Fragment } from 'react';
import './index.css';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const personName = [
  {name:'Ali'},
  {name:'Kaif'},
  {name:'Saif'},
];
function App() {
  let [steps,setSteps] = useState(1);
  let [previoussteps,setPrevioussteps] = useState(3)
  let [isOpen,setisOpen] = useState(true)
  // console.log(previoussteps)
  function handlePrevious(){
    if(steps > 1) {
      setSteps((currentSteps)=>currentSteps - 1);
      setPrevioussteps(previoussteps+1);
    }

  }
  function handleNext(){
    if(steps < 3){
      setSteps((currentSteps)=>currentSteps + 1);
      setPrevioussteps(previoussteps-1);
    }
  }
  function handleClose(){
    setisOpen(!isOpen)
  }
  return (
    <Fragment>
      {/* <div className="button_wrapper"> */}
      <button className='close_button' onClick={handleClose}>{isOpen ? "Close" : "Open"}</button>
      {/* </div> */}
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
      </div>}
    </Fragment>

  );
}

export default App;
