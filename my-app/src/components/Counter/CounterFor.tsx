import {useState} from 'react'


export default function CounterFor() {
    let [counter, setCounter] = useState(0);

    function goUp (){
        setCounter(counter+1)
    }
    
        function goDown(){
            setCounter(counter-1) 
        }
    
        function reset(){
            setCounter(0)
        }
    
    
        return (
            <div id= "counterDivId">
                <button onClick={goUp}>plus</button>
            <button onClick={goDown}>minus</button>
                <button onClick = {reset}>reset</button>
                <p>{counter}</p>
            </div>
        )
}
