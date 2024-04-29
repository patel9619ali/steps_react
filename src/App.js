
import './index.css';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function handlePrevious(){
  alert("Previous");
}
function handleNext(){
  alert("Next");
}
function App() {
  const steps = 3;
  return (
    <div className="steps">
      <div className="numbers">
        <div className='active'>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className='message'>{
       messages[steps-1]
      }</p>
      <div className="buttons">
        <button style={{color: '#fff', backgroundColor: "Purple"}} onClick={handlePrevious}>Previous</button>
        <button style={{color: '#fff', backgroundColor: "Purple"}} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
