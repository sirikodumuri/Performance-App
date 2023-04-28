import logo from './logo.svg';
import './App.css';
import {useState , useMemo} from "react";

function fact(n)
{
  let i = 0
  while(i<1000000) i++;
  {
  if(n == 0 || n==1)
  {
    return 1
  }
  else
  {
    return n * fact(n-1)
  }
 }
}

function App() {
const [myName, setmyName] = useState("");

const [number, setNumber] = useState(0);

const result = useMemo(function()
{
    return fact(number)

}, [number])


function collectName(event){
     setmyName(event.target.value)
}

function increaseIt(){
   setNumber(number + 1)
}

function decreaseIt(){
    setNumber(number - 1)

}

  return (
    <div>
      <h2>The Name is:{myName}</h2>
      Enter Name:<input type="text" onChange={collectName}/><br/><br/>

      <hr/>
     
     <h2>The Factorial of a Number {number} is : {result}  </h2>
     <button onClick={increaseIt}>Increment</button>
     <button onClick={decreaseIt}>Decrement</button>
    </div>
  );
}

export default App;
