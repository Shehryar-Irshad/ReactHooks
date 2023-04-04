import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {

   const [count, setcount] = useState(0);

   useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 1000);
  });
  
   let handlesubmit = () =>{
        setcount(count+1);
   }
   let handledec = () =>{
        setcount(count-1);
   }
  return (
    <div className="App">
        
       <h3>The count is : {count}</h3>
       <button onClick={handlesubmit} >Add</button>
       <button onClick={handledec} >dec</button>

    </div>
  );
}

export default App;
